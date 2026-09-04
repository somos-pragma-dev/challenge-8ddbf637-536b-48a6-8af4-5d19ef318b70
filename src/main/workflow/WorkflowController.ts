import express from 'express';
import { WorkflowService } from '../application/workflow/WorkflowService';

const router = express.Router();
const workflowService = new WorkflowService(new WorkflowRepository());

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const workflow = await workflowService.getWorkflow(id);
    res.status(200).json(workflow);
  } catch (error) {
    res.status(404).json({ error: 'Workflow not found' });
  }
});

export { router as WorkflowController };