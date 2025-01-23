export interface IExerciseService {
    getAllExercises(): Promise<any>; 
    createExercise(exercise: any): Promise<any>;
    updateExercise(id: string, updatedExercise: any): Promise<any>;
    deleteExercise(id: string): Promise<any>;
  }
  