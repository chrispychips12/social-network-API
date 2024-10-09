const { Schema, model } = require('mongoose');

// Define the User schema
const userSchema = new Schema({
  username: {
    type: String,
    unique: true, // Ensure the username is unique
    required: true, // Make the username a required field
    trim: true, // Remove whitespace from the beginning and end
  },
  email: {
    type: String,
    required: true, // Make the email a required field
    unique: true, // Ensure the email is unique
    match: [/.+@.+\..+/, 'Must match a valid email address'], // Validate email format
  },
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Thought', // Reference the Thought model
    },
  ],
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User', // Self-reference the User model
    },
  ],
},
{
  toJSON: {
    virtuals: true, // Include virtuals when converting to JSON
  },
  id: false, // Disable the default `id` field
});

// Create a virtual property `friendCount` that gets the number of friends
userSchema.virtual('friendCount').get(function() {
  return this.friends.length;
});

// Create the User model using the schema
const User = model('User', userSchema);

// Export the User model
module.exports = User;
