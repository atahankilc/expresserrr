import express from 'express';
import { ExerciseService } from '../services/exerciseService';

const router = express.Router();
const service = new ExerciseService();

// Tüm egzersizleri al
router.get('/', async (req, res) => {
  try {
    const exercises = await service.getAllExercises();
    res.json(exercises); // Hataları kontrol etmiyoruz, düz gönderiyoruz.
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch exercises' });
  }
});

// Yeni egzersiz oluştur
router.post('/', async (req, res) => {
  try {
    const newExercise = await service.createExercise(req.body); // Herhangi bir validation yok!
    res.status(201).json(newExercise);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Egzersizi güncelle
router.put('/:id', async (req, res) => {
  try {
    const updatedExercise = await service.updateExercise(req.params.id, req.body);
    if (!updatedExercise) {
      throw new Error('Exercise not found!');
    }
    res.json(updatedExercise);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

// Egzersizi sil
router.delete('/:id', async (req, res) => {
  try {
    const result = await service.deleteExercise(req.params.id);
    res.json(result); // Sadece başarıyla sildiğimizi söylüyoruz, hata kontrolü neredeyse yok.
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

export default router;
