// controllers/userController.js

// Import the UserService to interact with user-related functionality
const UserService = require('../services/userService');

// Define a class for handling user-related requests
class UserController {

  // Handle the request to log in a user
  static async loginUser(req, res) {
    // Extract username and password from the request body
    const { username, password } = req.body;

    try {
      // Call the loginUser method from UserService to authenticate the user
      const user = await UserService.loginUser(username, password);

      // Check if the authentication is successful
      if (user) {
        // If successful, respond with the user details
        res.json(user);
      } else {
        // If authentication fails, respond with a 400 Bad Request and an error message
        res.status(400).json({ message: 'Invalid credentials' });
      }
    } catch (error) {
      // If an error occurs during the login process, respond with a 500 Internal Server Error and the error message
      res.status(500).json({ message: error.message });
    }
  }

  // Handle the request to register a new user
  static async registerUser(req, res) {
    // Extract user data from the request body
    const userData = req.body;

    try {
      // Call the registerUser method from UserService to add a new user
      const newUser = await UserService.registerUser(userData);

      // Respond with a success message and the details of the newly registered user
      res.json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
      // If an error occurs during the user registration process, respond with a 500 Internal Server Error and the error message
      res.status(500).json({ message: error.message });
    }
  }
}

// Export the UserController class for use in other parts of the application
module.exports = UserController;
