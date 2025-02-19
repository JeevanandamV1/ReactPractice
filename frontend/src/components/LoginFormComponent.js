import React, { useContext } from "react";
import { createLoginAPI } from "../pages/Login";

export default function LoginFormComponent() {
  const {
    loginForm,
    handleSubmit,
    handleLoginChange,
    showPassword,
    setShowPassword,
  } = useContext(createLoginAPI);

  return (
    <>
      <div className="card-content">
        <form onSubmit={handleSubmit} className="form">
          <div className="input-group">
            <label>User Name or email</label>
            <input
              type="email"
              placeholder="Enter your user Name"
              value={loginForm?.userName}
              onChange={handleLoginChange}
              name="Email or User Name"
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={loginForm?.userPassword}
                onChange={handleLoginChange}
                name="Email or User Name"
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <button type="submit" className="btn">
            Sign in
          </button>
        </form>
      </div>
    </>
  );
}
