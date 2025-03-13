import {
  Controller,
  Post,
  Patch,
  Get,
  Body,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
// @UseGuards(AuthGuard)
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createTask(
    @Body() body: { title: string; description: string; ownerId: string },
  ) {
    const task = await this.tasksService.createTask(
      body.title,
      body.description,
      body.ownerId,
    );
    return { message: 'Task created successfully', task };
  }

  @Patch(':id/complete')
  @HttpCode(HttpStatus.OK)
  async markCompleted(@Param('id') taskId: string) {
    const task = await this.tasksService.markCompleted(taskId);
    return { message: 'Task marked as completed', task };
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  async update(
    @Body() body: { title: string; description?: string; ownerId?: string },
    @Param('id') taskId: string,
  ) {
    const task = await this.tasksService.updateTask({ id: taskId, ...body });
    return { message: 'Task updated successfully', task };
  }

  @Get(':userId')
  @HttpCode(HttpStatus.OK)
  async getTasks(@Param('userId') userId: string) {
    const tasks = await this.tasksService.getTasks(userId);
    return { message: 'Tasks retrieved successfully', tasks };
  }
  
  

  @Get(':userId/combined')
  @HttpCode(HttpStatus.OK)
  async getCombinedTasks(@Param('userId') userId: string) {
    const tasks = await this.tasksService.getCombinedTasks(userId);
    return { message: 'Combined tasks retrieved successfully', tasks };
  }

  @Get(':userId/completed')
  @HttpCode(HttpStatus.OK)
  async getCompletedTasks(@Param('userId') userId: string) {
    const tasks = await this.tasksService.getCompletedTasks(userId);
    return { message: 'Completed tasks retrieved successfully', tasks };
  }

  @Get(':userId/incomplete')
  @HttpCode(HttpStatus.OK)
  async getIncompleteTasks(@Param('userId') userId: string) {
    const tasks = await this.tasksService.getIncompleteTasks(userId);
    return { message: 'Incomplete tasks retrieved successfully', tasks };
  }

  @Get(':userId/count')
  @HttpCode(HttpStatus.OK)
  async countTasks(@Param('userId') userId: string) {
    const count = await this.tasksService.countTasks(userId);
    return { message: 'Task count retrieved successfully', count };
  }

  @Get(':taskId')
  @HttpCode(HttpStatus.OK)
  async getTaskById(@Param('taskId') taskId: string) {
    const task = await this.tasksService.getTaskById(taskId);
    return { message: 'Task retrieved successfully', task };
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  async deleteTask(@Param('id') taskId: string) {
    const task = await this.tasksService.deleteTask(taskId);
    return { message: 'Task deleted successfully', task };
  }
}
