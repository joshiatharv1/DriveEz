import React from "react";

// Question component represents a section displaying frequently asked questions
export default function Question() {
  return (
    <div className="space-y-4">
      <div className="mt-20 text-lg leading-10 text-gray-600">
        <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
          Frequently asked questions
        </h2>
      </div>

      {/* FAQ item: What do I need to book a car on DriveEz? */}
      <details
        className="group border-s-4 border-orange-300 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
        open
      >
        <summary className="flex cursor-pointer justify-between gap-1">
          <h2 className="text-md font-medium text-gray-900">
            What do I need to book a car on DriveEz?
          </h2>

          {/* Icon for toggling the details */}
          <span className="shrink-0 rounded-full bg-white p-1 text-gray-900 sm:p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </summary>

        {/* Answer to the FAQ */}
        <p className="mt-2 text-sm text-gray-700">
          To book a car on Turo in the United States, you must create a Turo
          account, be 18 years old or older with a valid driver’s license, and
          get approved to drive on DrivEz. When you’re booking your first trip,
          you’ll go through a quick approval process by entering your
          driver’s license and some other information.
        </p>
      </details>

      {/* Repeat the structure for other FAQs */}
      
    </div>
  );
}
