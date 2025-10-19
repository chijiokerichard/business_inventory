import React, { useState } from 'react';
import axios from 'axios';

// --- CONSTANTS ---
// IMPORTANT: Replace this with the actual URL of your Django API server
const API_BASE_URL = 'http://127.0.0.1:8000/login/'; 
const LOGIN_URL = `${API_BASE_URL}`; 

// --- HELPER FUNCTION ---
// Store the tokens securely in localStorage upon successful login
const setAuthTokens = (access, refresh) => {
  localStorage.setItem('access_token', access);
  localStorage.setItem('refresh_token', refresh);
  // Optional: You could decode the access token here to get user info 
  // and store that as well (e.g., localStorage.setItem('user_id', decoded.user_id))
};

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    console.log(username)
    try {
      // 1. POST credentials to the Django JWT endpoint
      const response = await axios.post(LOGIN_URL, {
        Headers:{
          accept:"application/json"
        },
        username: username,
        password: password
      });

      // 2. On success, extract and store the tokens
      const { access, refresh } = response.data;
      setAuthTokens(access, refresh);

      // 3. Success Feedback and Redirection
      console.log('Login successful! Tokens stored.');
      // In a real app, you would redirect the user to a dashboard here:
      // navigate('/dashboard'); 

    } catch (err) {
      // 4. Handle Errors from Django (e.g., 401 Unauthorized/Invalid credentials)
      if (err.response && err.response.status === 401) {
        setError('Invalid username or password. Please try again.');
      } else if (err.response) {
        // Handle other server-side validation errors
        setError(`Login failed: ${err.response.statusText}`);
      } else {
        // Handle network errors (Django server down, connectivity issues)
        setError('Cannot connect to the server. Check your network or API URL.');
      }
      console.error('Login Error:', err);

    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-2xl">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
          Sign In
        </h2>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 space-y-6">
          
          <div>
            <label 
              htmlFor="username" 
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-150"
              disabled={isLoading}
            />
          </div>

          <div>
            <label 
              htmlFor="password" 
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-150"
              disabled={isLoading}
            />
          </div>

          {error && (
            <p className="text-sm text-red-600 font-medium bg-red-50 p-3 rounded-lg border border-red-200">
              {error}
            </p>
          )}

          <div>
            <button
              type="submit"
              className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-md text-sm font-medium text-white 
                ${isLoading 
                  ? 'bg-blue-400 cursor-not-allowed' 
                  : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200'
                }`}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Signing In...
                </>
              ) : (
                'Sign In'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
