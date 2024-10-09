const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/userController');

// Route to get all users and create a new user
router.route('/')
  .get(getUsers) // GET all users
  .post(createUser); // POST a new user

// Route to get, update, or delete a single user by ID
router.route('/:userId')
  .get(getSingleUser) // GET a single user by ID
  .put(updateUser) // PUT to update a user by ID
  .delete(deleteUser); // DELETE a user by ID

// Route to add or remove a friend from a user's friend list
router.route('/:userId/friends/:friendId')
  .post(addFriend) // POST to add a friend
  .delete(removeFriend); // DELETE to remove a friend

// Export the router
module.exports = router;
