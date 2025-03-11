import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PrismaModule } from '../prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthGuard } from './auth.guard';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    PrismaModule,
    UsersModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '20h' },
    }),
  ],
  providers: [AuthService, AuthGuard],
  controllers: [AuthController],
})
export class AuthModule {}
