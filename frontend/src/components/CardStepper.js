import React, { useContext } from "react";
import { multiStepContext } from "../pages/MultiStepForm";

export default function CardStepper() {
  const { hookFormData, handleChange } = useContext(multiStepContext);

  return (
    <div>
      <h2>Enter your Card Details</h2>
      <input
        value={hookFormData.cardName}
        onChange={handleChange}
        placeholder="Card Name"
        name="cardName"
        type="text"
        required
      />
      <input
        value={hookFormData.cardNumber}
        onChange={handleChange}
        placeholder="Card Number"
        name="cardNumber"
        type="text"
        required
      />
      <input
        value={hookFormData.cardCVV}
        onChange={handleChange}
        placeholder="Enter CVV"
        name="cardCVV"
        type="text"
        required
      />
    </div>
  );
}
