// Importing necessary modules and components
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SideBar from '../sidebar/sidebar.tsx';
import { Link } from 'react-router-dom';

// Functional component definition
const AdminBase = () => {
  return (
    // Main container with flex layout
    <div style={{ display: "flex" }}>
      {/* Sidebar component */}
      <SideBar />

      
      <section className="bg-white text-white" style={{ flex: "1" }}>
        
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            {/* Main heading with gradient text styling */}
            <h1
              className="bg-gradient-to-r from-orange-600 via-white-800 to-orange-400 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
            >
              Understand User Flow.
              {/* Subheading for Admin */}
              <span className="sm:block"> Welcome Admin ! </span>
            </h1>

            {/* Subtitle */}
            <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed textColor">
              Lets continue where we left !
            </p>

            {/* Button to navigate to admin dashboard */}
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/admin/dashboard"
                
                className="block w-full rounded border border-orange-600 custon-bg-color px-12 py-3 text-sm font-medium textColor hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Exporting the component as default
export default AdminBase;
