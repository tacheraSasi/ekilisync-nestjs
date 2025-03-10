import { Injectable, NotFoundException } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  // Creating a new user 
  async createUser(email: string, password: string, name: string) {
    const hashedPassword = await bcrypt.hash(password, 10);
    return this.prisma.user.create({
      data: { email, password: hashedPassword, name },
      select: { id: true, email: true, name: true },
    });
  }

  async getUserById(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: { id: true, email: true, name: true, partnerId: true },
    });

    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  async getUserByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

  // Pairing two users as a couple
  async pairUsers(userId: string, partnerId: string) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    const partner = await this.prisma.user.findUnique({
      where: { id: partnerId },
    });

    if (!user || !partner) {
      throw new NotFoundException('One or both users not found');
    }

    // Pairing both users
    await this.prisma.user.update({
      where: { id: userId },
      data: { partnerId },
    });

    await this.prisma.user.update({
      where: { id: partnerId },
      data: { partnerId: userId },
    });

    return { message: 'Users paired successfully' };
  }

  async getPartner(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      include: { partner: true },
    });

    if (!user || !user.partner) {
      throw new NotFoundException('Partner not found');
    }

    return {
      partnerId: user.partner.id,
      name: user.partner.name,
      email: user.partner.email,
    };
  }
}
