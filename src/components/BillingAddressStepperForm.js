import React, { useContext } from "react";
import { multiStepContext } from "../pages/MultiStepForm";

export default function BillingAddressStepperForm() {
  const { hookFormData, handleChange } = useContext(multiStepContext);

  return (
    <div>
      <h2>Enter Your Billing Address</h2>
      <form>
        <input
          value={hookFormData.address}
          name="address"
          type="text"
          placeholder="Enter Address line 1"
          onChange={handleChange}
          required
        />
        <input
          value={hookFormData.address2}
          name="address2"
          type="text"
          placeholder="Enter Address line 2"
          onChange={handleChange}
        />
        <input
          value={hookFormData.city}
          name="city"
          type="text"
          placeholder="Enter City"
          onChange={handleChange}
        />
        <input
          value={hookFormData.street}
          name="street"
          type="text"
          placeholder="Enter Street"
          onChange={handleChange}
          required
        />
        <div>
          <input
            value={hookFormData.state}
            name="state"
            type="text"
            placeholder="Enter State"
            onChange={handleChange}
            required
          />
          <input
            value={hookFormData.pincode}
            name="pincode"
            type="text"
            placeholder="Enter PinCode"
            onChange={handleChange}
            required
          />
        </div>
      </form>
    </div>
  );
}
