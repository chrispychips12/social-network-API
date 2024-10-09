const { Schema, model, Types } = require('mongoose');

// Define the Reaction schema
const reactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(), // Generate a new ObjectId by default
  },
  reactionBody: {
    type: String,
    required: true, // Make the reaction body a required field
    maxlength: 280, // Limit the length to 280 characters
  },
  username: {
    type: String,
    required: true, // Make the username a required field
  },
  createdAt: {
    type: Date,
    default: Date.now, // Set the default value to the current timestamp
    get: (timestamp) => new Date(timestamp).toLocaleString(), // Format the timestamp
  },
},
{
  toJSON: {
    getters: true, // Include getters when converting to JSON
  },
  id: false, // Disable the default `id` field
});

// Define the Thought schema
const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true, // Make the thought text a required field
    minlength: 1, // Set a minimum length of 1 character
    maxlength: 280, // Limit the length to 280 characters
  },
  createdAt: {
    type: Date,
    default: Date.now, // Set the default value to the current timestamp
    get: (timestamp) => new Date(timestamp).toLocaleString(), // Format the timestamp
  },
  username: {
    type: String,
    required: true, // Make the username a required field
  },
  reactions: [reactionSchema], // Embed the Reaction schema
},
{
  toJSON: {
    virtuals: true, // Include virtuals when converting to JSON
    getters: true, // Include getters when converting to JSON
  },
  id: false, // Disable the default `id` field
});

// Create a virtual property `reactionCount` that gets the number of reactions
thoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

// Create the Thought model using the schema
const Thought = model('Thought', thoughtSchema);

// Export the Thought model
module.exports = Thought;
