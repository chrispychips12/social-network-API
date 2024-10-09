# Social Network API

## Video Tutorial 
https://drive.google.com/file/d/1pJ-h8LXFWBNhCxPt6v6gFX7l6IYOsNvd/view



## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Installation](#installation)
4. [Usage](#usage)
   - [API Endpoints](#api-endpoints)
   - [Example Requests](#example-requests)
5. [User Stories](#user-stories)
6. [Acceptance Criteria](#acceptance-criteria)
7. [License](#license)
8. [References](#references)
9. [Contact](#contact)

## Overview

The Social Network API is a backend application that allows users to interact with a social network platform. Users can create accounts, add friends, post thoughts, and react to others' thoughts. This API is built using Node.js, Express, and MongoDB.

## Features

- User account creation, update, and deletion
- Friend management (add and remove friends)
- Thought creation, update, and deletion
- Reaction management (add and remove reactions to thoughts)
- Retrieve all users and thoughts

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/social-network-api.git
   cd social-network-api
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   - Create a `.env` file in the root directory.
   - Add your MongoDB URI:
     ```
     MONGODB_URI=mongodb://localhost/socialnetwork
     ```

4. **Seed the Database** (optional):
   ```bash
   node seed.js
   ```

5. **Start the Server**:
   ```bash
   node server.js
   ```

## Usage

### API Endpoints

#### Users

- **Create User**: `POST /api/users`
- **Update User**: `PUT /api/users/:userId`
- **Delete User**: `DELETE /api/users/:userId`
- **Get All Users**: `GET /api/users`
- **Get User by ID**: `GET /api/users/:userId`
- **Add Friend**: `POST /api/users/:userId/friends/:friendId`
- **Remove Friend**: `DELETE /api/users/:userId/friends/:friendId`

#### Thoughts

- **Create Thought**: `POST /api/thoughts`
- **Update Thought**: `PUT /api/thoughts/:thoughtId`
- **Delete Thought**: `DELETE /api/thoughts/:thoughtId`
- **Get All Thoughts**: `GET /api/thoughts`
- **Get Thought by ID**: `GET /api/thoughts/:thoughtId`

#### Reactions

- **Add Reaction**: `POST /api/thoughts/:thoughtId/reactions`
- **Remove Reaction**: `DELETE /api/thoughts/:thoughtId/reactions/:reactionId`

### Example Requests

- **Create a User**:
  ```json
  POST /api/users
  {
    "username": "newUser",
    "email": "newUser@example.com"
  }
  ```

- **Add a Friend**:
  ```json
  POST /api/users/60d21b4667d0d8992e610c85/friends/60d21b4967d0d8992e610c86
  ```

## User Stories

1. **As a user, I want to create a new account so that I can join the social network.**
2. **As a user, I want to update my account information so that my profile is current.**
3. **As a user, I want to delete my account if I no longer wish to use the service.**
4. **As a user, I want to view all users so that I can find people to connect with.**
5. **As a user, I want to view a specific user's profile so that I can learn more about them.**
6. **As a user, I want to add friends to my profile so that I can connect with others.**
7. **As a user, I want to remove friends from my profile if I no longer wish to be connected.**
8. **As a user, I want to create thoughts so that I can share my ideas with others.**
9. **As a user, I want to view all thoughts so that I can see what others are sharing.**
10. **As a user, I want to add reactions to thoughts so that I can engage with content.**
11. **As a user, I want to remove reactions from thoughts if I change my mind.**

## Acceptance Criteria

- The API should allow users to perform CRUD operations on user accounts.
- Users should be able to manage their friend lists by adding and removing friends.
- The API should support CRUD operations for thoughts and allow users to react to thoughts.
- All endpoints should return appropriate status codes and messages.
- The application should be able to handle invalid inputs gracefully.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## References

- [Express Documentation](https://expressjs.com/)
- [Mongoose Documentation](https://mongoosejs.com/)
- [Node.js Documentation](https://nodejs.org/en/docs/)

## Contact

For more information, visit my GitHub profile: [chrispychips12](https://github.com/chrispychips12)
