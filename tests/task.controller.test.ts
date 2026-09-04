import { TaskController } from '../src/api/task.controller';
import { TaskService } from '../src/application/task.service';
import { Request, Response } from 'express';
import { Task } from '../src/domain/task';

describe('TaskController', () => {
  let taskController: TaskController;
  let taskService: TaskService;
  let req: Partial<Request>;
  let res: Partial<Response>;

  beforeEach(() => {
    taskService = new TaskService(new TaskRepository());
    taskController = new TaskController(taskService);
    req = { body: {}, params: {} } as Partial<Request>;
    res = { status: jest.fn().mockReturnThis(), json: jest.fn(), send: jest.fn() } as Partial<Response>;
  });

  it('should create a task', async () => {
    const task: Task = {
      id: '1',
      title: 'Test Task',
      description: 'This is a test task',
      status: TaskStatus.BACKLOG,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    req.body = task;
    await taskController.createTask(req as Request, res as Response);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(task);
  });

  it('should get a task by id', async () => {
    const task: Task = {
      id: '1',
      title: 'Test Task',
      description: 'This is a test task',
      status: TaskStatus.BACKLOG,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    req.params.id = '1';
    await taskController.getTaskById(req as Request, res as Response);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(task);
  });

  it('should update a task', async () => {
    const task: Task = {
      id: '1',
      title: 'Updated Task',
      description: 'This is an updated task',
      status: TaskStatus.IN_PROGRESS,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    req.body = task;
    await taskController.updateTask(req as Request, res as Response);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(task);
  });
});