import React, { useState } from 'react';
// import axios from 'axios';

const App: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState<string | null>(null);
  const [error, setError] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);

  // const handleLogin = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setError('');

  //   const apiKey = import.meta.env.VITE_RAWG_API_KEY;
  //   const endpoint = `https://api.rawg.io/api/users/login?key=${apiKey}`;

  //   try {
  //     const response = await axios.post(endpoint, { username, password });

  //     if (response.data.token) {
  //       setToken(response.data.token);
  //       localStorage.setItem('rawg_token', response.data.token);
  //       alert('Login successful!');
  //     } else {
  //       throw new Error('Token not received.');
  //     }
  //   } catch (err) {
  //     console.error(err);
  //     setError('Login failed. Please check your credentials.');
  //   }
  // };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const existingUser = localStorage.getItem(`user_${username}`);
    if (existingUser) {
      setError('User already exists. Please log in.');
      return;
    }

    try {
      // Store credentials in localStorage (mocking user creation)
      const userData = JSON.stringify({ username, email, password });
      localStorage.setItem(`user_${username}`, userData);

      alert('Registration successful! Please log in.');
      setIsRegistering(false); // Switch to login form
    } catch (err) {
      console.error(err);
      setError('Registration failed. Please try again.');
    }
  };

  const handleMockLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const storedUser = localStorage.getItem(`user_${username}`);
    if (!storedUser) {
      setError('User not found. Please register.');
      return;
    }

    const { password: storedPassword } = JSON.parse(storedUser);
    if (storedPassword === password) {
      const mockToken = `mock_token_${Date.now()}`;
      setToken(mockToken);
      localStorage.setItem('rawg_token', mockToken);
      alert('Login successful!');
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>RAWG API {isRegistering ? 'Register' : 'Login'}</h1>
      {token ? (
        <div>
          <p>Welcome To Four Tet RAWG API! You are logged in.</p>
          <button
            onClick={() => {
              setToken(null);
              localStorage.removeItem('rawg_token');
              alert('Logged out successfully.');
            }}
          >
            Log Out
          </button>
        </div>
      ) : (
        <form onSubmit={isRegistering ? handleRegister : handleMockLogin}>
          {isRegistering && (
            <div>
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          )}
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">{isRegistering ? 'Register' : 'Log In'}</button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
      )}
      {!token && (
        <p>
          {isRegistering ? (
            <>
              Already have an account?{' '}
              <button onClick={() => setIsRegistering(false)}>Log In</button>
            </>
          ) : (
            <>
              Don't have an account?{' '}
              <button onClick={() => setIsRegistering(true)}>Register</button>
            </>
          )}
        </p>
      )}
    </div>
  );
};

export default App;

