import { AuthService } from '../../../src/application/auth/AuthService';
import { AuthRepository } from '../../../src/infrastructure/auth/AuthRepository';

describe('AuthService', () => {
  let authService: AuthService;
  let authRepository: AuthRepository;

  beforeEach(() => {
    authRepository = new AuthRepository();
    authService = new AuthService(authRepository);
  });

  it('should authenticate user', async () => {
    const auth = await authService.authenticate('test', 'test');
    expect(auth).toBeDefined();
  });

  it('should return error for invalid credentials', async () => {
    try {
      await authService.authenticate('invalid', 'invalid');
    } catch (error) {
      expect(error).toBeDefined();
    }
  });

  it('should return error for missing credentials', async () => {
    try {
      await authService.authenticate('', '');
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});