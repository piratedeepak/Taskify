import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './task.schema';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  create(@Body() taskData: Partial<Task>) {
    return this.taskService.create(taskData);
  }

  @Get()
  findAll() {
    return this.taskService.findAll();
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateData: Partial<Task>) {
    return this.taskService.update(id, updateData);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.taskService.delete(id);
  }
}
