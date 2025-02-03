import React, { useState, createContext } from "react";
import "../styles/pages/Expensetracker.css";
import Form from "../components/Form";
import vectorExpense from "../assets/img/vectorExpense.jpg";
import ShowExpense from "../components/ShowExpense";
import NoExpense from "../components/NoExpense";

export const expenseContext = createContext();

function ExpenseTracker() {
  const [isOpen, setIsOpen] = useState(false);
  const [Open, setOpen] = useState(false);
  const [showData, setshowData] = useState({});
  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    date: "",
  });

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const newExpense = {
  //     ...formData,
  //     id: Date.now(),
  //     hourlyExpenses: Array(24).fill({ amount: 0 }),
  //   };
  //   console.log("find expense", newExpense);

  //   setshowData((prevData) => {
  //     const updatedData = {
  //       ...prevData,
  //       [newExpense.title]: {
  //         title: newExpense.title,
  //         amount: newExpense.amount,
  //         hourlyExpenses: newExpense.hourlyExpenses,
  //         id: newExpense.id,
  //         date: newExpense.date,
  //       },
  //     };

  //     console.log(
  //       "Complete expense data after adding new expense:",
  //       updatedData
  //     );
  //     return updatedData;
  //   });
  //   setFormData({ title: "", amount: "", date: "" });
  //   setIsOpen(false);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExpense = {
      ...formData,
      id: Date.now(),
      hourlyExpenses: Array(24).fill({ amount: 0 }),
    };

    setshowData((prevData) => {
      const updatedData = {
        ...prevData,
        [newExpense.title]: {
          title: newExpense.title,
          amount: newExpense.amount,
          hourlyExpenses: newExpense.hourlyExpenses,
          id: newExpense.id,
          date: newExpense.date,
        },
      };
      console.log(updatedData);
      return updatedData;
    });
    setFormData({ title: "", amount: "", date: "" });
    setIsOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <expenseContext.Provider
      value={{
        setIsOpen,
        handleSubmit,
        handleChange,
        formData,
        showData,
        setshowData,
        setOpen,
        Open,
      }}
    >
      <div className="container">
        <div className="container">
          <img
            className="background-pattern"
            src={vectorExpense}
            alt="vector"
          />
          <div className="header">
            <button onClick={() => setIsOpen(true)} className="button">
              <svg
                className="plus-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
              Create Expense
            </button>
          </div>
        </div>
        {isOpen && <Form />}
      </div>
      {showData && Object.keys(showData).length > 0 ? (
        <ShowExpense />
      ) : (
        <NoExpense />
      )}
    </expenseContext.Provider>
  );
}

export default ExpenseTracker;
