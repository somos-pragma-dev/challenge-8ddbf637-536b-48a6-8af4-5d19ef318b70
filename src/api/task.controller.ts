import { Request, Response } from 'express';
import { TaskService } from '../application/task.service';

export class TaskController {
  constructor(private taskService: TaskService) {}

  async createTask(req: Request, res: Response): Promise<void> {
    try {
      const task = await this.taskService.createTask(req.body);
      res.status(201).json(task);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getTaskById(req: Request, res: Response): Promise<void> {
    try {
      const task = await this.taskService.getTaskById(req.params.id);
      if (task) {
        res.status(200).json(task);
      } else {
        res.status(404).json({ error: 'Task not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateTask(req: Request, res: Response): Promise<void> {
    try {
      const task = await this.taskService.updateTask(req.body);
      res.status(200).json(task);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteTask(req: Request, res: Response): Promise<void> {
    try {
      await this.taskService.deleteTask(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}