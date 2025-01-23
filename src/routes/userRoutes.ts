import express from 'express';
import { createUser, getAllUsers } from '../services/userService';

const router = express.Router();

router.get('/', (req, res) => {
  const users = getAllUsers();
  res.json(users);
});

router.post('/', (req, res) => {
  const { id, name, email } = req.body;
  if (!id || !name || !email) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const newUser = createUser({ id, name, email });
  res.status(201).json(newUser);
});

export default router;
