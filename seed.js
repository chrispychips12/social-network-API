const mongoose = require('mongoose');
const { User, Thought } = require('./models');
const connection = require('./config/connection');

// Connect to the database
connection.once('open', async () => {
  console.log('Connected to the database');

  // Clear existing data
  await User.deleteMany({});
  await Thought.deleteMany({});

  // Seed data
  const users = [
    { username: 'alice', email: 'alice@example.com' },
    { username: 'bob', email: 'bob@example.com' },
  ];

  const thoughts = [
    { thoughtText: 'This is a thought by Alice', username: 'alice' },
    { thoughtText: 'This is a thought by Bob', username: 'bob' },
  ];

  // Insert users
  await User.insertMany(users);

  // Insert thoughts
  await Thought.insertMany(thoughts);

  console.log('Database seeded!');
  process.exit(0);
});
