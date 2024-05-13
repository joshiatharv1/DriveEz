import { Link } from 'react-router-dom';
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from '../redux/actions/userActions';
import { useNavigate } from 'react-router-dom';
import { useTranslation} from "react-i18next";

export default function Login() {
  const {t}=useTranslation('comman');
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Use useNavigate hook to get the navigation function
  const { loading } = useSelector((state) => state.alertsReducer);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Function to handle form submission
  function onFinish(event) {
    event.preventDefault();

    // Dispatch the userLogin action with the username and password
    dispatch(userLogin({ username, password }));

    // Optional: Log the values to the console
    console.log("Username:", username);
    console.log("Password:", password);
  }

  return (
    <section className="relative flex flex-wrap lg:h-screen lg:items-center">
      <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl textColor">{t('title')}</h1>
        </div>
        <form
          onSubmit={onFinish} // Use onSubmit instead of action and preventDefault
          className="mx-auto mb-0 mt-8 max-w-md space-y-4"
        >
          <div>
            <label htmlFor="username" className="sr-only">
            {t('form.label.username')}
            </label>
            <div className="relative">
              <input
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder={t('form.label.enteruser')}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
            </div>
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
            {t('form.label.password')}
            </label>
            <div className="relative">
              <input
                type="password"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder={t('form.label.enterpass')}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">
            {t('form.label.noaccount')}
              <Link to='/register'>{t('form.button.signup')}</Link>
            </p>
            <button
              type="submit"
              className="inline-block rounded-lg bg-orange-400 px-5 py-3 text-sm font-medium text-white p-4"

            >
              {t('button.signin')}
            </button>
          </div>
        </form>
      </div>
      <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
        <img
          alt="Welcome"
          src="/images/login.jpg"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </section>
  );
}