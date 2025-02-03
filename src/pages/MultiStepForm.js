import React, { createContext, useState } from "react";
import BillingAddressStepperForm from "../components/BillingAddressStepperForm";
import CardStepper from "../components/CardStepper";
import CheckAndPay from "../components/CheckAndPay";
import "../styles/pages/MultiStepForm.css";

export const multiStepContext = createContext();

function MultiStepForm() {
  const [nextStep, setNextStep] = useState(1);
  const [isopen, setisopen] = useState(false);
  const [otp, setotp] = useState();
  const [isVerified, setisVerified] = useState(true);
  const [formData, setFormData] = useState({
    address: "",
    address2: "",
    city: "",
    street: "",
    state: "",
    pincode: "",
  });
  const [cardformdata, setcardformdata] = useState({
    cardName: "",
    cardNumber: "",
    cardCVV: "",
  });

  //  handle change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(setFormData);
  };

  // handle card change
  function handleSecondStepperFormChange(e) {
    const { name, value } = e.target;
    setcardformdata({ ...cardformdata, [name]: value });
  }

  // handle next step
  function handleNextStep() {
    setNextStep((prev) => prev + 1);
    if (nextStep === 1) {
      console.log(formData);
    }

    if (nextStep === 2) {
      const lastData = {
        ...formData,
        ...cardformdata,
      };
      console.log(lastData);
    }
  }

  // handle previous step
  function handlePrevStep() {
    setNextStep((prev) => prev - 1);
  }

  function handleCardDetailsSubmit(e) {
    console.log("dfff");
  }

  // handle submit
  function handleSubmit(e) {
    e.preventDefault();
  }

  // handle OTP
  function handleOtp() {
    const randomFourDigitOtpGenerator = Math.floor(1000 + Math.random() * 9000);
    setotp(randomFourDigitOtpGenerator);
    setisopen(true);
    setisVerified(true);

    if (otp) {
      setisVerified(false);
      setotp("");
      const checkPaymentData = { ...formData, ...cardformdata, isVerified };
      console.log(checkPaymentData);
    }
  }

  //  handle place order
  function handlePlaceOrder() {
    if (!isVerified) {
      console.log("order placed succesfully");
    } else {
      console.log("order not placed");
    }
  }

  return (
    <multiStepContext.Provider
      value={{
        handleSubmit,
        formData,
        handleChange,
        handleCardDetailsSubmit,
        setcardformdata,
        cardformdata,
        handleSecondStepperFormChange,
        handleOtp,
        isopen,
        setotp,
        otp,
        handlePlaceOrder,
        setisVerified,
        isVerified,
      }}
    >
      <div className="Stepper-Container">
        <div className="Stepper-Content">
          {nextStep === 1 && <BillingAddressStepperForm />}
          {nextStep === 2 && <CardStepper />}
          {nextStep === 3 && <CheckAndPay />}
        </div>

        <div>
          <button onClick={handlePrevStep} disabled={nextStep === 1}>
            Back
          </button>
          {nextStep === 3 ? (
            <button onClick={handlePlaceOrder}>place order</button>
          ) : (
            <button onClick={handleNextStep}>Next</button>
          )}
        </div>
      </div>
    </multiStepContext.Provider>
  );
}

export default MultiStepForm;
