import express from 'express';
const router = express.Router();
import { registerUser, selectRole } from './user.controller.js';
import authMiddleware from '../../../middlewares/auth.middleware.js';

router.post('/select-role', selectRole);
router.post('/register',authMiddleware, registerUser);

export default router;
