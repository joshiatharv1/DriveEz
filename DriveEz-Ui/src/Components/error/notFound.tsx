import React from 'react';
import { Link } from 'react-router-dom';

// NotFound component displays a 404 error page when a route is not found
const NotFound = () => {
  return (
    <div>
      <div className="grid h-screen place-content-center bg-white px-4">
        <div className="text-center">
          {/* Large 404 text */}
          <h1 className="text-9xl font-black text-gray-200">404</h1>

          {/* Error message */}
          <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">Uh-oh!</p>

          {/* Not found message */}
          <p className="mt-4 text-gray-500">We can't find that page.</p>

          {/* Link to go back to the home page */}
          <Link
            to="/landingpage"
            className="mt-6 inline-block rounded custom-bg-color px-5 py-3 text-sm font-medium text-white hover:custom-bg-color focus:outline-none focus:ring"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
