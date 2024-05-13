// Import necessary dependencies
import React, { useState } from 'react';

// Define the FromToPanel component
const FromToPanel: React.FC = () => {
  // State to store the from and to locations
  const [fromLocation, setFromLocation] = useState<string>('');
  const [toLocation, setToLocation] = useState<string>('');

  // Handler for changing the from location
  const handleFromLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFromLocation(event.target.value);
  };

  // Handler for changing the to location
  const handleToLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setToLocation(event.target.value);
  };

  // Render the FromToPanel component
  return (
    <div>
      <label htmlFor="fromLocation">From:</label>
      <input
        type="text"
        id="fromLocation"
        value={fromLocation}
        onChange={handleFromLocationChange}
        placeholder="Enter starting location"
      />

      <label htmlFor="toLocation">To:</label>
      <input
        type="text"
        id="toLocation"
        value={toLocation}
        onChange={handleToLocationChange}
        placeholder="Enter destination location"
      />
    </div>
  );
};

// Export the FromToPanel component
export default FromToPanel;
