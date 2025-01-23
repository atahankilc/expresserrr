import { Exercise } from '../types/exercise';
import { getExercises } from '../interace/exerciseService'; // mock verisini import ettik

// Tüm egzersizleri döndürme
export const getAllExercises = (): Exercise[] => {
  return getExercises();
};

// Yeni egzersiz oluşturma
export const createExercise = (exercise: Exercise): Exercise => {
  getExercises().push(exercise); // Yeni egzersiz ekle
  return exercise;
};

// Egzersizi silme
export const deleteExercise = (id: string): boolean => {
  const index = getExercises().findIndex(exercise => exercise.id === id);
  if (index === -1) return false; // Egzersiz bulunamazsa false döner
  getExercises().splice(index, 1); // Egzersizi sil
  return true;
};

// Egzersizi güncelleme
export const updateExercise = (id: string, updatedExercise: Partial<Exercise>): Exercise | null => {
  const exercise = getExercises().find(ex => ex.id === id);
  if (!exercise) return null; // Eğer egzersiz bulunamazsa null döner
  Object.assign(exercise, updatedExercise); // Egzersizi güncelle
  return exercise;
};
