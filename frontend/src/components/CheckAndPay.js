import React, { useContext } from "react";
import { multiStepContext } from "../pages/MultiStepForm";
export default function CheckAndPay() {
  const { formData, cardformdata, isopen, otp, handleOtp, setotp, isVerified } =
    useContext(multiStepContext);
  return (
    <div>
      <h2>Check Your details</h2>
      <h2>Address</h2>
      <p>
        {formData.address},{formData.city}, {formData.state}-{formData.pincode}
      </p>
      <h2>card Details</h2>
      <p>{cardformdata.cardName}</p>
      <button onClick={handleOtp}>
        {isVerified ? (isopen ? "Verify OTP" : "Get OTP") : "Verfied"}
      </button>
      {isVerified
        ? isopen && (
            <input
              value={otp}
              type="number"
              onChange={(e) => setotp(e.target.value)}
              required
            />
          )
        : ""}
    </div>
  );
}
