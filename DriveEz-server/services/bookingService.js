// Import the Booking and Car models to interact with the database
const Booking = require('../models/bookingModel');
const Car = require('../models/carModel');

// Service class for handling booking-related operations
class BookingService {

  // Method to book a car
  static async bookCar(bookingData) {
    try {
      // Your payment-related logic (commented out for simplicity)
      // ...

      // Create a new booking instance based on the provided bookingData
      const newBooking = new Booking(bookingData);

      // Save the new booking to the database
      await newBooking.save();

      // Retrieve the car associated with the booking
      const car = await Car.findOne({ _id: bookingData.car });

      // Update the bookedTimeSlots of the car with the new booking's time slots
      car.bookedTimeSlots.push(bookingData.bookedTimeSlots);

      // Save the updated car information to the database
      await car.save();

      // Return the newly created booking
      return newBooking;
    } catch (error) {
      // If an error occurs during the booking process, throw an error
      throw new Error('Failed to book a car.');
    }
  }

  // Method to retrieve all bookings
  static async getAllBookings() {
    try {
      // Fetch all bookings from the database and populate the 'car' field to include car details
      const bookings = await Booking.find().populate('car');

      // Return the array of booking data
      return bookings;
    } catch (error) {
      // If an error occurs while fetching bookings, throw an error
      throw new Error('Failed to fetch bookings.');
    }
  }
}

// Export the BookingService class for use in other parts of the application
module.exports = BookingService;
