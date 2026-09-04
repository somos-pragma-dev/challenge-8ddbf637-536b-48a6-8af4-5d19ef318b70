import { Workflow } from '../domain/workflow/Workflow';

export class WorkflowRepository {
  async getWorkflow(id: string): Promise<Workflow> {
    // Implementación del repositorio de workflow
    return new Workflow('', '', []);
  }
}