import { useState } from "react";
import { useNavigate } from "react-router-dom";

function useFormHook(initialValue, loginIntialValue) {
  const [hookFormData, sethookFormdata] = useState(initialValue);
  const [loginForm, setLoginForm] = useState(loginIntialValue);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginForm((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loginForm) {
      console.log("login pressed");
      navigate("/LandingPage");
    } else {
      alert("please fill up the form");
    }
    console.log(loginForm);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    sethookFormdata({
      ...hookFormData,
      [name]: value,
    });
    console.log(hookFormData);
  };

  return {
    hookFormData,
    sethookFormdata,
    handleChange,
    setLoginForm,
    loginForm,
    setShowPassword,
    showPassword,
    handleSubmit,
    handleLoginChange,
  };
}

export default useFormHook;
