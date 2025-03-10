import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { comparePassword, hashPassword } from 'src/lib/utils';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {
    console.log('AuthService instantiated');
  }

  async signUp(email: string, password: string, name: string) {
    const existingUser = await this.prisma.user.findUnique({
      where: { email: email },
    });
    if (existingUser) {
      throw new Error('User already exists');
    }
    const hashedPassword = hashPassword(password);
    const user = await this.prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
      },
    });
    console.log(user);
    return { token: this.jwtService.sign({ userId: user.id }) };
  }

  async signIn(email: string, password: string) {
    const user = await this.prisma.user.findUnique({
      where: { email: email },
    });
    if (!user) {
      throw new Error('User not found');
    }
    if (comparePassword(password, user.password)) {
      console.log(user.password);
      console.log(hashPassword(password));
      throw new Error('Failed to autheniticate: Invalid email or password');
    }
    return { token: this.jwtService.sign({ userId: user.id }) };
  }
}
