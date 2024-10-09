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

  // Insert users
  const createdUsers = await User.insertMany(users);

  // Create thoughts associated with users
  const thoughts = [
    { thoughtText: 'This is a thought by Alice', username: 'alice', userId: createdUsers[0]._id },
    { thoughtText: 'This is a thought by Bob', username: 'bob', userId: createdUsers[1]._id },
  ];

  // Insert thoughts
  const createdThoughts = await Thought.insertMany(thoughts);

  // Update users with thought IDs
  await User.findOneAndUpdate(
    { _id: createdUsers[0]._id },
    { $addToSet: { thoughts: createdThoughts[0]._id } }
  );

  await User.findOneAndUpdate(
    { _id: createdUsers[1]._id },
    { $addToSet: { thoughts: createdThoughts[1]._id } }
  );

  console.log('Database seeded!');
  process.exit(0);
});
