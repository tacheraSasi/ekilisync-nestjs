import { Controller, Post, Patch, Get, Body, Param } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  createTask(@Body() body: { title: string; ownerId: string }) {
    return this.tasksService.createTask(body.title, body.ownerId);
  }

  @Patch(':id/complete')
  markCompleted(@Param('id') taskId: string) {
    return this.tasksService.markCompleted(taskId);
  }

  @Get(':userId')
  getTasks(@Param('userId') userId: string) {
    return this.tasksService.getTasks(userId);
  }
}
