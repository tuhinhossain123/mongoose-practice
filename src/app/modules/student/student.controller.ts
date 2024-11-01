import { Request, Response } from 'express';
import { StudentServices } from './student.service';

const createStudednt = async (req: Request, res: Response) => {
  const student = req.body;
  const result = await StudentServices.studentCreateIntoDB(student);

  res.status(200).json({
    success: true,
    message: 'Student create successfuly',
    data: result,
  });
};
