import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { userRegister } from '../redux/actions/userActions';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const { t } = useTranslation('comman');
  const navigate = useNavigate(); 
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setPasswordConfirmation] = useState("");

  function onFinish(event) {
    event.preventDefault();
     dispatch(userRegister({  username, password, cpassword }));
    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Password Confirmation:", cpassword);
  }

  return (
    <section className="bg-white min-h-screen flex items-center justify-center">
      <div className="max-w-md p-4 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-bold text-center text-orange-400">
        Welcome to DriveEz 
        </h2>
        <p className="mt-2 text-sm text-center text-orange-300">
        Turn Moments into Memories with Our Rental Fleet
        </p>

        <form onSubmit={onFinish} className="mt-4 grid grid-cols-1 gap-4">
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
           
              />
            </div>

            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
              Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="last_name"
                className="w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
              
            />
          </div>

          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
            Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="passwordConfirmation" className="block text-sm font-medium text-gray-700">
              Confirm Password
              </label>
              <input
                type="password"
                id="passwordConfirmation"
                name="password_confirmation"
                className="w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                value={cpassword}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full inline-block px-3 py-2 rounded-md border border-orange-400 bg-orange-400 text-sm font-medium text-white transition hover:bg-transparent hover:text-orange-400 focus:outline-none focus:ring active:text-orange-400"
            >
              Create an account
            </button>
          </div>

          <p className="mt-2 text-sm text-gray-500 text-center">
          By creating an account, you agree to our
            <a href="#" className="text-orange-400 underline">
            terms and conditions
            </a>{" "}
            privacy policy
            <a href="#" className="text-orange-400 underline">
              
            </a>
            .
          </p>

          <p className="mt-2 text-sm text-orange-400 text-center">
           Already have account
            <Link to="/login" className="text-orange-400 underline">
              Click Here To Login
            </Link>
            .
          </p>
        </form>
      </div>
    </section>
  );
}
