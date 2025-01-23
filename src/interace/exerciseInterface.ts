import { Exercise } from "../types/exercise";

const exercises: Exercise[] = [
    {
      id: '1',
      title: 'JavaScript Basics',
      description: 'Learn the fundamentals of JavaScript programming.',
      createdBy: 'user1',
    },
    {
      id: '2',
      title: 'TypeScript Introduction',
      description: 'Introduction to TypeScript, its features, and advantages.',
      createdBy: 'user2',
    },
    {
      id: '3',
      title: 'Node.js for Beginners',
      description: 'Learn how to build server-side applications using Node.js.',
      createdBy: 'user1',
    },
    {
      id: '4',
      title: 'React for Beginners',
      description: 'A basic guide to getting started with React.',
      createdBy: 'user3',
    },
    {
      id: '5',
      title: 'Express.js Basics',
      description: 'Learn how to create REST APIs with Express.js.',
      createdBy: 'user2',
    },
  ];

export const getExercises = () => exercises;

export const updateExercise = () => exercises[0];

export const deleteExercise = () => null;