import express from 'express';
const router = express.Router();
import { registerUser, saveAddress, selectRole,completeRegistration } from './user.controller.js';
import authMiddleware from '../../../middlewares/auth.middleware.js';

router.post('/select-role', selectRole);
router.post('/register',authMiddleware, registerUser);
router.post('/address',authMiddleware,saveAddress);
router.post("/complete", authMiddleware, completeRegistration);

export default router;
