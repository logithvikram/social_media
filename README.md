# Simple Social Media App

## Description
This is a simple social media application built using the MERN stack (MongoDB, Express.js, React, Node.js). It allows users to create profiles, share posts, interact with others, and build a social network.

## Features
- **User Profiles:**
  - Users can create profiles with their name, profile picture, location, and description.
- **Posts:**
  - Users can create posts with text and images.
  - Users can like and comment on posts.
- **Social Interactions:**
  - Users can follow other users.

## Setup Instructions
1. Clone the repository:
2. Install dependencies:
3. Set up environment variables:
- Create a `.env` file in the root directory.
- Define the following variables:
  ```
  PORT=3001
  MONGODB_URI=<your-mongodb-uri>
  ```
4. Start the development server:

## Database Schema
The application uses MongoDB as its database. Here's the schema for the collections:

### Users Collection:
- **_id**: ObjectId
- **name**: String
- **email**: String
- **password**: String
- **profilePicture**: String
- **location**: String
- **description**: String
- **friends**: Array of ObjectIds

### Posts Collection:
- **_id**: ObjectId
- **content**: String
- **images**: Array of Strings
- **author**: ObjectId
- **likes**: Array of ObjectIds
- **comments**: Array of Objects

### Images Collection:
- **_id**: ObjectId
- **path**: String
- **uploader**: ObjectId

## License
[MIT License](LICENSE)

## Contributing
Contributions are welcome. Please create an issue or submit a pull request if you find any bugs or want to suggest improvements.



