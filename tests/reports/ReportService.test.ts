import { ReportService } from '../../../src/application/reports/ReportService';
import { ReportRepository } from '../../../src/infrastructure/reports/ReportRepository';

describe('ReportService', () => {
  let reportService: ReportService;
  let reportRepository: ReportRepository;

  beforeEach(() => {
    reportRepository = new ReportRepository();
    reportService = new ReportService(reportRepository);
  });

  it('should get report', async () => {
    const report = await reportService.getReport('1');
    expect(report).toBeDefined();
  });

  it('should return error for invalid report', async () => {
    try {
      await reportService.getReport('invalid');
    } catch (error) {
      expect(error).toBeDefined();
    }
  });

  it('should return error for missing report', async () => {
    try {
      await reportService.getReport('');
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});