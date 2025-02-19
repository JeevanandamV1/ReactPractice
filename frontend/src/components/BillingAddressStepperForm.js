import React, { useContext } from "react";
import { multiStepContext } from "../pages/MultiStepForm";

export default function BillingAddressStepperForm() {
  const { formData, handleChange } = useContext(multiStepContext);

  return (
    <div>
      <h2>Enter Your Billing Address</h2>
      <form>
        <input
          value={formData.address}
          name="address"
          type="text"
          placeholder="Enter Address line 1"
          onChange={handleChange}
          required
        />
        <input
          value={formData.address2}
          name="address2"
          type="text"
          placeholder="Enter Address line 2"
          onChange={handleChange}
        />
        <input
          value={formData.city}
          name="city"
          type="text"
          placeholder="Enter City"
          onChange={handleChange}
        />
        <input
          value={formData.street}
          name="street"
          type="text"
          placeholder="Enter Street"
          onChange={handleChange}
          required
        />
        <div>
          <input
            value={formData.state}
            name="state"
            type="text"
            placeholder="Enter State"
            onChange={handleChange}
            required
          />
          <input
            value={formData.pincode}
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
