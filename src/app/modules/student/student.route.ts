import express from 'express';
import { StudentsControllers } from './student.controller';

const router = express.Router();

router.post('/create-student', StudentsControllers.createStudednt);

export const StudentsRoutes = router;
