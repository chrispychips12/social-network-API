const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thoughtController');

// Route to get all thoughts and create a new thought
router.route('/')
  .get(getThoughts) // GET all thoughts
  .post(createThought); // POST a new thought

// Route to get, update, or delete a single thought by ID
router.route('/:thoughtId')
  .get(getSingleThought) // GET a single thought by ID
  .put(updateThought) // PUT to update a thought by ID
  .delete(deleteThought); // DELETE a thought by ID

// Route to add or remove a reaction to a thought
router.route('/:thoughtId/reactions')
  .post(addReaction); // POST to add a reaction

router.route('/:thoughtId/reactions/:reactionId')
  .delete(removeReaction); // DELETE to remove a reaction by ID

// Export the router
module.exports = router;
