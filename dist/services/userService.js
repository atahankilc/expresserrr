"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.getAllUsers = void 0;
const users = []; // Mock user database
const getAllUsers = () => users;
exports.getAllUsers = getAllUsers;
const createUser = (user) => {
    users.push(user);
    return user;
};
exports.createUser = createUser;
