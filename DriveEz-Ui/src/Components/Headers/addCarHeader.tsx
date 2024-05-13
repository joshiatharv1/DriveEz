import React from 'react';

// AddCarHeader component displays the header for adding a new car
const AddCarHeader = () => {
    return (
        <div>
            <header>
                {/* Header section for adding a new car */}
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 textColor">
                    <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl textColor">Add a new Cars</h1>
                </div>
            </header>
        </div>
    );
}

export default AddCarHeader;
