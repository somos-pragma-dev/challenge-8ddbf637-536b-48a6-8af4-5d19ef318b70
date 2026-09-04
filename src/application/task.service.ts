import { Task } from '../domain/task';
import { TaskRepository } from '../infrastructure/database/task.repository';

export class TaskService {
  constructor(private taskRepository: TaskRepository) {}

  async createTask(task: Task): Promise<Task> {
    return this.taskRepository.save(task);
  }

  async getTaskById(id: string): Promise<Task | null> {
    return this.taskRepository.findById(id);
  }

  async updateTask(task: Task): Promise<Task> {
    return this.taskRepository.update(task);
  }

  async deleteTask(id: string): Promise<void> {
    await this.taskRepository.delete(id);
  }
}