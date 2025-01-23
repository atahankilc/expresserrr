"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userService_1 = require("../services/userService");
const router = express_1.default.Router();
router.get('/', (req, res) => {
    const users = (0, userService_1.getAllUsers)();
    res.json(users);
});
router.post('/', (req, res) => {
    const { id, name, email } = req.body;
    if (!id || !name || !email) {
        return res.status(400).json({ error: 'All fields are required' });
    }
    const newUser = (0, userService_1.createUser)({ id, name, email });
    res.status(201).json(newUser);
});
exports.default = router;
