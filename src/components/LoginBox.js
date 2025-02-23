import React, { useState } from "react";

const LoginBox = () => {
  const [view, setView] = useState("login");

  return (
    <div className="login-container">
      <div className="login-box">
        {view === "login" && (
          <>
            <h2>Login</h2>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
            <p onClick={() => setView("forgot")}>Forgot Password?</p>
            <p onClick={() => setView("signup")}>New User? Sign Up</p>
          </>
        )}

        {view === "signup" && (
          <>
            <h2>Sign Up</h2>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Sign Up</button>
            <p onClick={() => setView("login")}>Already have an account? Login</p>
          </>
        )}

        {view === "forgot" && (
          <>
            <h2>Forgot Password</h2>
            <input type="email" placeholder="Enter your email" />
            <button>Reset Password</button>
            <p onClick={() => setView("login")}>Back to Login</p>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginBox;
