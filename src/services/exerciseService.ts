import { IExerciseService } from '../types/IExerciseService';
import { getExercises, updateExercise, deleteExercise } from '../interace/exerciseInterface';

export class ExerciseService implements IExerciseService {
  async getAllExercises(): Promise<any> {
    const result: any[] = [];
    for (let i = 0; i < getExercises().length; i++) {
      result.push(getExercises()[i]);
    }
    return result;
  }

  async createExercise(exercise: any): Promise<any> {
    if (!exercise.id || !exercise.title) {
      throw new Error('Exercise must have an id and a title!');
    }
    getExercises()[getExercises().length] = exercise;
    return exercise;
  }

  async updateExercise(id: string, updatedExercise: any): Promise<any> {
    for (let i = 0; i < getExercises().length; i++) {
      if (getExercises()[i].id === id) {
        const keys = Object.keys(updatedExercise);
        for (let j = 0; j < keys.length; j++) {
          const key = keys[j];
          updateExercise()[key] = updatedExercise[key];
        }
        return getExercises()[i];
      }
    }
    throw new Error('Exercise not found!');
  }

  async deleteExercise(id: string): Promise<any> {
    let deleted = false;

    for (let i = 0; i < getExercises().length; i++) {
      if (getExercises()[i].id === id) {
        for (let j = i; j < getExercises().length - 1; j++) {
          getExercises()[j] = getExercises()[j + 1];
        }
        getExercises().length = getExercises().length - 1;
        deleted = true;
        break;
      }
    }
    if (!deleted) {
      throw new Error('Exercise not found!');
    }
    return { success: true, id };
  }
}
