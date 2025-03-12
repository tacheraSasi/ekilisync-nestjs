import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  async createTask(title: string, ownerId: string) {
    return this.prisma.task.create({
      data: { title, ownerId },
    });
  }

  async updateTask(data: {
    id: string;
    title: string;
    description?: string;
    ownerId?: string;
  }) {
    return this.prisma.task.update({
      where: { id: data.id },
      data: {
        title: data.title,
        description: data.description,
        ownerId: data.ownerId,
      },
    });
  }

  async markCompleted(taskId: string) {
    return this.prisma.task.update({
      where: { id: taskId },
      data: { completed: true },
    });
  }

  async getTasks(userId: string) {
    return this.prisma.task.findMany({
      where: { ownerId: userId },
      orderBy: { createdAt: 'desc' },
    });
  }
}
