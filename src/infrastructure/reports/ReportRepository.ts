import { Report } from '../domain/reports/Report';

export class ReportRepository {
  async getReport(id: string): Promise<Report> {
    // Implementación del repositorio de reportes
    return new Report('', '', {});
  }
}