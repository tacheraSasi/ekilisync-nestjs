import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Mailer } from 'src/lib/mailer';
import { comparePassword, hashPassword } from 'src/lib/utils';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private httpService: HttpService,
  ) {
    console.log('AuthService instantiated');
  }

  async signUp(email: string, password: string, name: string) {
    try {
      const existingUser = await this.prisma.user.findUnique({
        where: { email },
      });

      if (existingUser) {
        return { success: false, message: 'User already exists' };
      }

      const hashedPassword = hashPassword(password);
      const user = await this.prisma.user.create({
        data: { email, password: hashedPassword, name },
      });

      console.log(user);
      const mailer = new Mailer(this.httpService);
      await mailer.sendEmail(
        email,
        `Welcome to EkiliSync ${name}!`,
        `Thank you for signing up with EkiliSync! 
        Explore the wonders of ekiliSync and let us know if you have any questions.
        `,
      );
      return {
        success: true,
        token: this.jwtService.sign({ userId: user.id }),
      };
    } catch (error) {
      console.error('Error in signUp:', error);
      return { success: false, message: 'Internal server error' };
    }
  }

  async signIn(email: string, password: string) {
    try {
      const user = await this.prisma.user.findUnique({
        where: { email },
      });

      if (!user) {
        return { success: false, message: 'Invalid email or password' };
      }

      const isPasswordValid = await comparePassword(password, user.password);
      if (!isPasswordValid) {
        return { success: false, message: 'Invalid email or password' };
      }

      return {
        success: true,
        token: this.jwtService.sign({ userId: user.id }),
        user: user,
      };
    } catch (error) {
      console.error('Error in signIn:', error);
      return { success: false, message: 'Internal server error' };
    }
  }
}
