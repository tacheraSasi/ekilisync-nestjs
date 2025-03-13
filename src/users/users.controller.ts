import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('users')
@UseGuards(AuthGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers() {
    return this.usersService.getUsers();
  }

  @Get(':id')
  getUserById(@Param('id') userId: string) {
    return this.usersService.getUserById(userId);
  }

  @Post('pair')
  async pairUsers(@Body() body: { userId: string; partnerEmail: string }) {
    const partner = await this.usersService.getUserByEmail(body.partnerEmail);
    const partnerId = partner.id;
    return this.usersService.pairUsers(body.userId, partnerId);
  }

  @Get(':id/partner')
  getPartner(@Param('id') userId: string) {
    return this.usersService.getPartner(userId);
  }
}
