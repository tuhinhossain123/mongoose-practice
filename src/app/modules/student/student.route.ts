import express from 'express';
import { StudentsControllers } from './student.controller';

const router = express.Router();

router.post('/create-student', StudentsControllers.createStudednt);
router.get('/', StudentsControllers.getAllStudent);
router.get('/:studentId', StudentsControllers.getSingleStudent);

export const StudentsRoutes = router;
