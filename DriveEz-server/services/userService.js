// Import the User model to interact with the database
const User = require('../models/userModel');

// Service class for handling user-related operations
class UserService {

  // Method to authenticate a user during login
  static async loginUser(username, password) {
    try {
      // Find a user in the database with the provided username and password
      const user = await User.findOne({ username, password });

      // Return the user (or null if not found)
      return user;
    } catch (error) {
      // If an error occurs during the login process, throw an error
      throw new Error('Failed to log in.');
    }
  }

  // Method to register a new user
  static async registerUser(userData) {
    try {
      // Create a new user instance based on the provided userData
      const newUser = new User(userData);

      // Save the new user to the database
      await newUser.save();

      // Return the newly registered user
      return newUser;
    } catch (error) {
      // If an error occurs during the user registration process, throw an error
      throw new Error('Failed to register user.');
    }
  }
}

// Export the UserService class for use in other parts of the application
module.exports = UserService;
