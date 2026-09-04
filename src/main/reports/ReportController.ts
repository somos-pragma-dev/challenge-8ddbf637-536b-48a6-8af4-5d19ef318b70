import express from 'express';
import { ReportService } from '../application/reports/ReportService';

const router = express.Router();
const reportService = new ReportService(new ReportRepository());

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const report = await reportService.getReport(id);
    res.status(200).json(report);
  } catch (error) {
    res.status(404).json({ error: 'Report not found' });
  }
});

export { router as ReportController };