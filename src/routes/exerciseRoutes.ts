import express, { Request, Response } from 'express';
import { getAllExercises, createExercise, deleteExercise, updateExercise } from '../services/exerciseService';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  const exercises = getAllExercises();
  res.json(exercises);
});

router.post('/', (req: Request, res: Response) => {
  const { id, title, description, createdBy } = req.body;
  if (!id || !title || !description || !createdBy) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const newExercise = createExercise({ id, title, description, createdBy });
  res.status(201).json(newExercise);
});

router.delete('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const result = deleteExercise(id);
  if (result) {
    res.status(200).json({ message: 'Exercise deleted successfully' });
  } else {
    res.status(404).json({ error: 'Exercise not found' });
  }
});

router.put('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const updatedExercise = req.body;
  
  const result = updateExercise(id, updatedExercise);
  if (result) {
    res.status(200).json(result);
  } else {
    res.status(404).json({ error: 'Exercise not found' });
  }
});

export default router;
