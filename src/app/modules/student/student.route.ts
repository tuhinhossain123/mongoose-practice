import express from 'express';
import { StudentsControllers } from './student.controller';

const router = express.Router();

router.post('/create-student', StudentsControllers.createStudednt);
router.get('/', StudentsControllers.getAllStudent);

export const StudentsRoutes = router;
