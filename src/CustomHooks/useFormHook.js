import { useState } from "react";

function useFormHook(initialValue) {
  const [hookFormData, sethookFormdata] = useState(initialValue);

  const handleChange = (e) => {
    const { name, value } = e.target;
    sethookFormdata({
      ...hookFormData,
      [name]: value,
    });
    console.log(hookFormData);
  };

  return { hookFormData, sethookFormdata, handleChange };
}

export default useFormHook;
