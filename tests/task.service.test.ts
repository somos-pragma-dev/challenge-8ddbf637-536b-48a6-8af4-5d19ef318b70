import { TaskService } from '../src/application/task.service';
import { TaskRepository } from '../src/infrastructure/database/task.repository';
import { Task } from '../src/domain/task';

describe('TaskService', () => {
  let taskService: TaskService;
  let taskRepository: TaskRepository;

  beforeEach(() => {
    taskRepository = new TaskRepository();
    taskService = new TaskService(taskRepository);
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
    const createdTask = await taskService.createTask(task);
    expect(createdTask).toEqual(task);
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
    await taskService.createTask(task);
    const retrievedTask = await taskService.getTaskById('1');
    expect(retrievedTask).toEqual(task);
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
    const updatedTask = await taskService.updateTask(task);
    expect(updatedTask).toEqual(task);
  });
});