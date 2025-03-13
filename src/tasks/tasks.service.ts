import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  async createTask(title: string, description: string, ownerId: string) {
    return this.prisma.task.create({
      data: { title, ownerId, description },
    });
  }

  async updateTask(data: {
    id: string;
    title: string;
    description?: string;
    ownerId?: string;
  }) {
    try {
      return await this.prisma.task.update({
        where: { id: Number(data.id) },
        data: {
          title: data.title,
          description: data.description,
          ownerId: data.ownerId,
        },
      });
    } catch {
      throw new NotFoundException('Task not found.');
    }
  }

  async markCompleted(taskId: string) {
    try {
      return await this.prisma.task.update({
        where: { id: Number(taskId) },
        data: { completed: true },
      });
    } catch {
      throw new NotFoundException('Task not found.');
    }
  }

  async getTasks(userId: string) {
    return this.prisma.task.findMany({
      where: { ownerId: userId },
      orderBy: { createdAt: 'desc' },
    });
  }

  async getCombinedTasks(userId: string) {
    const userTasks = await this.prisma.task.findMany({
      where: { ownerId: userId },
      orderBy: { createdAt: 'desc' },
    });

    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: { partnerId: true },
    });
    if(!user || !user.partnerId) return userTasks;

    const partnerTasks = await this.prisma.task.findMany({
      where: { ownerId: user.partnerId },
      orderBy: { createdAt: 'desc' },
    });

    return [...userTasks, ...partnerTasks];
  }

  async getTaskById(taskId: string) {
    try {
      return await this.prisma.task.findUnique({
        where: { id: Number(taskId) },
      });
    } catch {
      throw new NotFoundException('Task not found.');
    }
  }

  async deleteTask(taskId: string) {
    try {
      return await this.prisma.task.delete({
        where: { id: Number(taskId) },
      });
    } catch {
      throw new NotFoundException('Task not found.');
    }
  }

  async getCompletedTasks(userId: string) {
    return this.prisma.task.findMany({
      where: { ownerId: userId, completed: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  async getIncompleteTasks(userId: string) {
    return this.prisma.task.findMany({
      where: { ownerId: userId, completed: false },
      orderBy: { createdAt: 'desc' },
    });
  }

  async countTasks(userId: string) {
    return this.prisma.task.count({
      where: { ownerId: userId },
    });
  }
}
