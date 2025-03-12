import {
  Controller,
  Post,
  Patch,
  Get,
  Body,
  Param,
  Delete,
} from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
// @UseGuards(AuthGuard)
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  createTask(
    @Body() body: { title: string; description: string; ownerId: string },
  ) {
    return this.tasksService.createTask(
      body.title,
      body.description,
      body.ownerId,
    );
  }

  @Patch(':id/complete')
  markCompleted(@Param('id') taskId: string) {
    return this.tasksService.markCompleted(taskId);
  }

  @Patch(':id')
  update(
    @Body() body: { title: string; description?: string; ownerId?: string },
    @Param('id') taskId: string,
  ) {
    return this.tasksService.updateTask({ id: taskId, ...body });
  }

  @Get(':userId')
  getTasks(@Param('userId') userId: string) {
    return this.tasksService.getTasks(userId);
  }

  @Delete(':id')
  deleteTask(@Param('id') taskId: string) {
    return this.tasksService.deleteTask(taskId);
  }
}
