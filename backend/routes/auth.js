import express from 'express';
import { registerUser, loginUser, protectedRoute } from '../controllers/authController.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/protected', protectedRoute);

export default router;