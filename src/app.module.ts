import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma/prisma.service';
import { TasksModule } from './tasks/tasks.module';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { SendEmailModule } from './send-email/send-email.module';

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot(),
    TasksModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '20h' },
    }),
    UsersModule,
    PrismaModule,
    SendEmailModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
