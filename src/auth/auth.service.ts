import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {
    console.log('AuthService instantiated');
  }

  async signUp() {
    console.log('Sign up');
  }

  async signIn() {
    console.log('Sign in');
  }
}
