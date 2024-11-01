import { Request, Response } from 'express';
import { StudentServices } from './student.service';

const createStudednt = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;
    const result = await StudentServices.studentCreateIntoDB(studentData);

    res.status(200).json({
      success: true,
      message: 'Student create successfuly',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getAllStudent = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentFromDB();

    res.status(200).json({
      success: true,
      message: 'All student get successfuly',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const StudentsControllers = {
  createStudednt,
  getAllStudent,
};
