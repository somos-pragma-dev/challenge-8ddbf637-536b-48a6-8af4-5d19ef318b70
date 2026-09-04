import redis from 'redis';

export class CacheService {
  private client: redis.RedisClient;

  constructor() {
    this.client = redis.createClient({
      host: 'localhost',
      port: 6379
    });
  }

  async set(key: string, value: any, ttl: number): Promise<void> {
    this.client.setex(key, ttl, JSON.stringify(value));
  }

  async get(key: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.client.get(key, (err, reply) => {
        if (err) reject(err);
        else resolve(JSON.parse(reply));
      });
    });
  }
}