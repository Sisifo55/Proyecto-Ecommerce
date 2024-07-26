const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/user');

exports.createUser = async (req, res) => {
  const { username, email, password, role } = req.body;

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      username,
      email,
      password_hash: hashedPassword,
      role
    });

    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error('Error getting users:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update a user by ID
exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const { username, email, password, role } = req.body;

  try {
    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    if (password) {
      const salt = await bcrypt.genSalt(10);
      user.password_hash = await bcrypt.hash(password, salt);
    }

    user.username = username || user.username;
    user.email = email || user.email;
    user.role = role || user.role;

    await user.save();
    res.json(user);
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete a user by ID
exports.deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    await user.destroy();
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
