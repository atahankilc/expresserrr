"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const exerciseService_1 = require("../services/exerciseService");
const router = express_1.default.Router();
router.get('/', (req, res) => {
    const exercises = (0, exerciseService_1.getAllExercises)();
    res.json(exercises);
});
router.post('/', (req, res) => {
    const { id, title, description, createdBy } = req.body;
    if (!id || !title || !description || !createdBy) {
        return res.status(400).json({ error: 'All fields are required' });
    }
    const newExercise = (0, exerciseService_1.createExercise)({ id, title, description, createdBy });
    res.status(201).json(newExercise);
});
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const result = (0, exerciseService_1.deleteExercise)(id);
    if (result) {
        res.status(200).json({ message: 'Exercise deleted successfully' });
    }
    else {
        res.status(404).json({ error: 'Exercise not found' });
    }
});
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const updatedExercise = req.body;
    const result = (0, exerciseService_1.updateExercise)(id, updatedExercise);
    if (result) {
        res.status(200).json(result);
    }
    else {
        res.status(404).json({ error: 'Exercise not found' });
    }
});
exports.default = router;
