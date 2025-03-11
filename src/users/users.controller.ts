import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @UseGuards(AuthGuard)
  getUsers() {
    return this.usersService.getUsers();
  }

  @Get(':id')
  getUserById(@Param('id') userId: string) {
    return this.usersService.getUserById(userId);
  }

  @Post('pair')
  pairUsers(@Body() body: { userId: string; partnerId: string }) {
    return this.usersService.pairUsers(body.userId, body.partnerId);
  }

  @Get(':id/partner')
  getPartner(@Param('id') userId: string) {
    return this.usersService.getPartner(userId);
  }
}
