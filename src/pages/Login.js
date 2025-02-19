import React, { createContext, useEffect } from "react";
import useFormHook from "../CustomHooks/useFormHook";
import LoginFormComponent from "../components/LoginFormComponent";
import "../styles/pages/LoginPage.css";
import LoginAPICall from "../Api/LoginApi";

export const createLoginAPI = createContext();

export default function LoginPage() {
  const {
    loginForm,
    setLoginForm,
    handleSubmit,
    handleLoginChange,
    showPassword,
    setShowPassword,
  } = useFormHook({
    userName: "",
    userEmail: "",
    userPassword: "",
    newUserPassowrd: "",
    confirmUserPasswordL: "",
  });

  const contextvalues = {
    loginForm,
    setLoginForm,
    handleLoginChange,
    handleSubmit,
    setShowPassword,
    showPassword,
  };

  useEffect(() => {
    console.log("component mounted");
    const payload = { ...loginForm };
    console.log("loginForm", loginForm);
    LoginAPICall(payload);
  }, [loginForm]);

  return (
    <createLoginAPI.Provider value={{ ...contextvalues }}>
      <div>
        <div className="login-container">
          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Welcome back</h2>
              <p className="card-description">
                Enter your credentials to access your account
              </p>
            </div>
            <LoginFormComponent />
            <div className="card-footer">
              <p>
                Don't have an account? <a href="#">Sign up</a>
              </p>
              <a href="#">Forgot your password?</a>
            </div>
          </div>
        </div>
      </div>
    </createLoginAPI.Provider>
  );
}
