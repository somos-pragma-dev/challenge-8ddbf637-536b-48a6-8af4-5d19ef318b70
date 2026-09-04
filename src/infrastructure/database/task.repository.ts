import { Task } from '../../domain/task';
import { getRepository } from 'typeorm';

export class TaskRepository {
  async save(task: Task): Promise<Task> {
    const repository = getRepository(Task);
    return await repository.save(task);
  }

  async findById(id: string): Promise<Task | null> {
    const repository = getRepository(Task);
    return await repository.findOne(id);
  }

  async update(task: Task): Promise<Task> {
    const repository = getRepository(Task);
    return await repository.save(task);
  }

  async delete(id: string): Promise<void> {
    const repository = getRepository(Task);
    await repository.delete(id);
  }
}