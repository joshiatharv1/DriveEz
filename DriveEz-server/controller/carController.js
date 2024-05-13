// controllers/carController.js

// Import the CarService to interact with car-related functionality
const CarService = require('../services/carService');

// Define a class for handling car-related requests
class CarController {

  // Handle the request to retrieve all cars
  static async getAllCars(req, res) {
    try {
      // Call the getAllCars method from CarService to fetch all cars
      const cars = await CarService.getAllCars();

      // Respond with the array of car data
      res.json(cars);
    } catch (error) {
      // If an error occurs while retrieving cars, respond with a 500 Internal Server Error and the error message
      res.status(500).json({ message: error.message });
    }
  }

  // Handle the request to add a new car
  static async addCar(req, res) {
    // Extract car data from the request body
    const carData = req.body;

    try {
      // Call the addCar method from CarService to add a new car
      const newCar = await CarService.addCar(carData);

      // Respond with a success message and the details of the newly added car
      res.json({ message: 'Car added successfully', car: newCar });
    } catch (error) {
      // If an error occurs during the car addition process, respond with a 500 Internal Server Error and the error message
      res.status(500).json({ message: error.message });
    }
  }

  // Handle the request to edit an existing car's details
  static async editCar(req, res) {
    // Extract carId and updatedCarData from the request body
    const carId = req.body.carId;
    const updatedCarData = req.body.updatedCarData;

    try {
      // Call the editCar method from CarService to update the details of the specified car
      const editedCar = await CarService.editCar(carId, updatedCarData);

      // Respond with a success message and the updated details of the car
      res.json({ message: 'Car details updated successfully', car: editedCar });
    } catch (error) {
      // If an error occurs during the car editing process, respond with a 500 Internal Server Error and the error message
      res.status(500).json({ message: error.message });
    }
  }

  // Handle the request to delete an existing car
  static async deleteCar(req, res) {
    // Extract carId from the request body
    const carId = req.body.carId;

    try {
      // Call the deleteCar method from CarService to delete the specified car
      const deletedCar = await CarService.deleteCar(carId);

      // Respond with a success message and the details of the deleted car
      res.json({ message: 'Car deleted successfully', car: deletedCar });
    } catch (error) {
      // If an error occurs during the car deletion process, respond with a 500 Internal Server Error and the error message
      res.status(500).json({ message: error.message });
    }
  }
}

// Export the CarController class for use in other parts of the application
module.exports = CarController;
