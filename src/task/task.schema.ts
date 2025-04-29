import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TaskDocument = Task & Document;

@Schema()
export class Task {
  @Prop({ required: true })
  title!: string;  // <-- add "!" (definite assignment)

  @Prop()
  description?: string;  // <-- optional

  @Prop({ default: 'pending' })
  status!: string;  // <-- add "!"
}


export const TaskSchema = SchemaFactory.createForClass(Task);
