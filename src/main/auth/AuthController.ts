import express from 'express';
import { AuthService } from '../application/auth/AuthService';

const router = express.Router();
const authService = new AuthService(new AuthRepository());

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const auth = await authService.authenticate(username, password);
    res.status(200).json(auth);
  } catch (error) {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

export { router as AuthController };