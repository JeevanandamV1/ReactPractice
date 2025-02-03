import React, { useContext } from "react";
import { multiStepContext } from "../pages/MultiStepForm";

export default function CardStepper() {
  const { cardformdata, handleSecondStepperFormChange } =
    useContext(multiStepContext);

  return (
    <div>
      <h2>Enter your Card Details</h2>
      <input
        value={cardformdata.cardName}
        onChange={handleSecondStepperFormChange}
        placeholder="Card Name"
        name="cardName"
        type="text"
        required
      />
      <input
        value={cardformdata.cardNumber}
        onChange={handleSecondStepperFormChange}
        placeholder="Card Number"
        name="cardNumber"
        type="text"
        required
      />
      <input
        value={cardformdata.cardCVV}
        onChange={handleSecondStepperFormChange}
        placeholder="Enter CVV"
        name="cardCVV"
        type="text"
        required
      />
    </div>
  );
}
