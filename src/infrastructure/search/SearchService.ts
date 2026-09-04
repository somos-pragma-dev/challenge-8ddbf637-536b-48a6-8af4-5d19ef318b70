import { Client } from 'elasticsearch';

export class SearchService {
  private client: Client;

  constructor() {
    this.client = new Client({ node: 'http://localhost:9200' });
  }

  async search(query: string): Promise<any> {
    return this.client.search({
      index: 'tasks',
      body: {
        query: {
          match: { message: query }
        }
      }
    });
  }
}