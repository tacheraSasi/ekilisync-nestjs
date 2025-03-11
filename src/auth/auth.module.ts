import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PrismaModule } from '../prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthGuard } from './auth.guard';
import { UsersService } from 'src/users/users.service';

@Module({
  imports: [
    PrismaModule,
    UsersService,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '20h' },
    }),
  ],
  providers: [AuthService, AuthGuard],
  controllers: [AuthController, AuthGuard],
})
export class AuthModule {}
