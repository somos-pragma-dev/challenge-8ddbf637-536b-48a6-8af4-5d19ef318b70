import { Report } from '../../domain/reports/Report';
import { ReportRepository } from '../../infrastructure/reports/ReportRepository';

export class ReportService {
  private reportRepository: ReportRepository;

  constructor(reportRepository: ReportRepository) {
    this.reportRepository = reportRepository;
  }

  async getReport(id: string): Promise<Report> {
    // Implementación del servicio de reportes
    return new Report();
  }
}