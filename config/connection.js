const mongoose = require('mongoose');

// Connect to the MongoDB database
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/socialnetwork');

// Export the connection
module.exports = mongoose.connection;
