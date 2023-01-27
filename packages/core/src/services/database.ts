// Persistent storage
import type GenericPrismaClient from '../clients/psql';

class DatabaseService {
  private client: GenericPrismaClient.PrismaClient;

  async init() {
    const {PrismaClient} = await import('../clients/psql') as any as typeof GenericPrismaClient;
    this.client = new PrismaClient();
  }
}