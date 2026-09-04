import { Auth } from '../domain/auth/Auth';

export class AuthRepository {
  async getAuth(username: string): Promise<Auth> {
    // Implementación del repositorio de autenticación
    return new Auth('', '', []);
  }
}