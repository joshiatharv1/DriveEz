# DriveEz Rental System



## Introduction



Welcome to **DriveEz**, a comprehensive web-based application designed to simplify and automate the vehicle rental process. This README provides essential information for setting up and running the project.



## Features



### User Registration and Authentication



- To use the system, users must register and authenticate their accounts securely.
- Sign Up feature for first time users.



### Vehicle Catalog



- Detailed information about each vehicle, including make, model and fuel type.
- High-quality images make it easy for users to browse the available vehicles.
- Users can easily navigate and find vehicles through categorization and filtering options.



### Booking and Reservation System



- Users can make reservations using a calendar-based system.
- Pickup and return dates and times can be selected conveniently.
- Availability status for each vehicle is displayed, and instant booking confirmation is provided.



### Location Selection



- Integration with mapping services ensures accurate location selection.



### Pricing and Payment



- Transparent pricing for each vehicle, with rental costs calculated based on duration.
- Secure payment gateway integration using Stripe for a seamless payment experience.



### User Profile Management



- Users can create and edit profiles, as well as view their reservation history.



### Admin Dashboard



- Admins have access to reservation details and customer information.
- Vehicles can be added, edited, or removed from the catalog.



### Responsive Design



- The system has a mobile-friendly layout for users on various devices.
- The user interface is consistent and intuitive for an enhanced user experience.



### Integration with GPS



- Real-time tracking of vehicles is available for both customers and administrators.
- Location-based services are integrated for navigation purposes.



### Multi-language Support



- Users can choose their preferred language (English, Tamil, Spanish).
- Content is localized for a global audience.



## Technology Stack
- **Frontend:** HTML5, Sass, TypeScript, React, Redux, Material UI, Tailwind
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **Payment Integration:** Stripe
- **Hosting:** Azure



## User Experience (UX) and Design



- The design is intuitive and responsive, providing a seamless user experience.
- The layout is mobile-friendly for on-the-go access.



## Future Enhancements



- Integration with GPS for real-time vehicle tracking.
- Implementation of loyalty programs for recurring customers.
- Integration with third-party travel platforms.



## Object Model Diagram



![Object Model Diagram](https://github.com/info-6150-fall-2023/final-project-driveez/assets/145231245/80d5791b-8736-444f-b39c-aa729f618271)



## Getting Started



1. **Clone the repository:**



    ```bash
    git clone https://github.com/info-6150-fall-2023/final-project-driveez.git
    ```



2. **Navigate to the project directory:**



    ```bash
    cd final-project-driveez
    ```



3. **Install frontend dependencies:**

    ```bash
    cd DriveEz-Ui
    npm install
    ```

4. **Install backend dependencies:**

    ```bash
    cd ../DriveEz-server
    npm install
    ```

5. **Set up the MongoDB database and configure the connection in the backend. Update the `db.js` file in the `backend` directory with your MongoDB connection details.**

6. **Start the frontend and backend servers:**

    ```bash
    # Start the frontend server
    cd DriveEz-Ui
    npm start

    # Start the backend server
    cd ../DriveEz-server
    node server.js
    ```

7. **Access the application in your browser at `http://localhost:3000`.**



## Conclusion



**DriveEz** aims to optimize car rental businesses by providing a secure, feature-rich, and user-friendly platform. We hope this project simplifies the rental process, enhances customer satisfaction, and improves overall business operations. If you encounter any issues, please refer to the documentation or contact our support team.
