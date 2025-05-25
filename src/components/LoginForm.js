import React from 'react'

function LoginForm({isLoggedIn, setIsLoggedIn}) {
    const handleLogin = (e) => {
        e.preventDefault();
        setIsLoggedIn(true);
    };

  return (
    <div>
        {isLoggedIn ? (
            <p>You are logged in!</p>
        ) : (
            <form onSubmit={handleLogin}>
                <label>Username: </label>
                <input type="text" placeholder="Username" required />
                <br/>
                <br/>
                <label>Password: </label>
                <input type="password" placeholder="Password" required />
                <br/>
                <br/>
                <button type="submit">Login</button>
            </form>
        )}
    </div>
  );
}

export default LoginForm;