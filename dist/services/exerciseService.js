"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateExercise = exports.deleteExercise = exports.createExercise = exports.getAllExercises = void 0;
// Mock veritabanı
const exercises = [];
const getAllExercises = () => {
    return exercises;
};
exports.getAllExercises = getAllExercises;
// Yeni egzersiz oluşturma
const createExercise = (exercise) => {
    exercises.push(exercise);
    return exercise;
};
exports.createExercise = createExercise;
// Egzersizi silme
const deleteExercise = (id) => {
    const index = exercises.findIndex(exercise => exercise.id === id);
    if (index === -1)
        return false;
    exercises.splice(index, 1);
    return true;
};
exports.deleteExercise = deleteExercise;
// Egzersizi güncelleme
const updateExercise = (id, updatedExercise) => {
    const exercise = exercises.find(ex => ex.id === id);
    if (!exercise)
        return null;
    Object.assign(exercise, updatedExercise);
    return exercise;
};
exports.updateExercise = updateExercise;
