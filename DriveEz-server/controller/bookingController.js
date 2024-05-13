// controllers/bookingController.js

// Import the BookingService to interact with booking-related functionality
const BookingService = require('../services/bookingService');

// Define a class for handling booking-related requests
class BookingController {

  // Handle the request to book a car
  static async bookCar(req, res) {
    try {
      // Extract booking data from the request body
      const bookingData = req.body;

      // Call the bookCar method from BookingService to process the booking
      const newBooking = await BookingService.bookCar(bookingData);

      // Respond with a success message and the details of the newly created booking
      res.json({ message: 'Your booking is successful', booking: newBooking });
    } catch (error) {
      // If an error occurs during the booking process, respond with a 500 Internal Server Error and the error message
      res.status(500).json({ message: error.message });
    }
  }

  // Handle the request to retrieve all bookings
  static async getAllBookings(req, res) {
    try {
      // Call the getAllBookings method from BookingService to fetch all bookings
      const bookings = await BookingService.getAllBookings();

      // Respond with the array of booking data
      res.json(bookings);
    } catch (error) {
      // If an error occurs while retrieving bookings, respond with a 500 Internal Server Error and the error message
      res.status(500).json({ message: error.message });
    }
  }
}

// Export the BookingController class for use in other parts of the application
module.exports = BookingController;

