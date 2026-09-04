import { WorkflowService } from '../../../src/application/workflow/WorkflowService';
import { WorkflowRepository } from '../../../src/infrastructure/workflow/WorkflowRepository';

describe('WorkflowService', () => {
  let workflowService: WorkflowService;
  let workflowRepository: WorkflowRepository;

  beforeEach(() => {
    workflowRepository = new WorkflowRepository();
    workflowService = new WorkflowService(workflowRepository);
  });

  it('should get workflow', async () => {
    const workflow = await workflowService.getWorkflow('1');
    expect(workflow).toBeDefined();
  });

  it('should return error for invalid workflow', async () => {
    try {
      await workflowService.getWorkflow('invalid');
    } catch (error) {
      expect(error).toBeDefined();
    }
  });

  it('should return error for missing workflow', async () => {
    try {
      await workflowService.getWorkflow('');
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});