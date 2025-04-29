import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task, TaskDocument } from './task.schema';

@Injectable()
export class TaskService {
  private readonly logger = new Logger('TaskService');

  constructor(@InjectModel(Task.name) private taskModel: Model<TaskDocument>) {}

  async create(taskData: Partial<Task>): Promise<Task> {
    const task = new this.taskModel(taskData);
    const created = await task.save();
    this.logger.log(JSON.stringify({ event: 'create', taskId: created._id, title: created.title }));
    return created;
  }

  async findAll(): Promise<Task[]> {
    const tasks = await this.taskModel.find().exec();
    this.logger.log(JSON.stringify({ event: 'findAll', count: tasks.length }));
    return tasks;
  }

  async update(id: string, updateData: Partial<Task>): Promise<Task | null> {
    const updated = await this.taskModel.findByIdAndUpdate(id, updateData, { new: true }).exec();
    if (!updated) {
      return null;  // <-- if no document found
    }
    return updated;
  }
  
  async delete(id: string): Promise<Task | null> {
    const deleted = await this.taskModel.findByIdAndDelete(id).exec();
    if (!deleted) {
      return null;  // <-- if no document found
    }
    return deleted;
  }
  
}
