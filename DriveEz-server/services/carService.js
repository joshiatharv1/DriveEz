// Import the Car model to interact with the database
const Car = require('../models/carModel');

// Service class for handling car-related operations
class CarService {

  // Method to retrieve all cars
  static async getAllCars() {
    try {
      // Fetch all cars from the database
      const cars = await Car.find();

      // Return the array of car data
      return cars;
    } catch (error) {
      // If an error occurs while fetching cars, throw an error
      throw new Error('Failed to fetch cars.');
    }
  }

  // Method to add a new car
  static async addCar(carData) {
    try {
      // Create a new car instance based on the provided carData
      const newCar = new Car(carData);

      // Save the new car to the database
      await newCar.save();

      // Return the newly added car
      return newCar;
    } catch (error) {
      // If an error occurs during the car addition process, throw an error
      throw new Error('Failed to add car.');
    }
  }

  // Method to edit an existing car
  static async editCar(carId, updatedCarData) {
    try {
      // Find the car in the database based on the provided carId
      const car = await Car.findOne({ _id: carId });

      // If the car is not found, throw an error
      if (!car) {
        throw new Error('Car not found.');
      }

      // Update the car's properties with the provided updatedCarData
      car.name = updatedCarData.name;
      car.image = updatedCarData.image;
      car.fuelType = updatedCarData.fuelType;
      car.rentPerHour = updatedCarData.rentPerHour;
      car.capacity = updatedCarData.capacity;

      // Save the updated car information to the database
      await car.save();

      // Return the edited car
      return car;
    } catch (error) {
      // If an error occurs during the car editing process, throw an error
      throw new Error('Failed to edit car.');
    }
  }

  // Method to delete an existing car
  static async deleteCar(carId) {
    try {
      // Find and delete the car in the database based on the provided carId
      const deletedCar = await Car.findOneAndDelete({ _id: carId });

      // If the car is not found, throw an error
      if (!deletedCar) {
        throw new Error('Car not found.');
      }

      // Return the details of the deleted car
      return deletedCar;
    } catch (error) {
      // If an error occurs during the car deletion process, throw an error
      throw new Error('Failed to delete car.');
    }
  }
}

// Export the CarService class for use in other parts of the application
module.exports = CarService;
