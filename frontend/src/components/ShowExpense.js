import React, { useContext } from "react";
import "../styles/pages/Expensetracker.css";
import { expenseContext } from "../pages/ExpensiveTracker";
import HourlyBased from "./HourlyBased";

export default function ShowExpense() {
  const { showData, Open, setOpen } = useContext(expenseContext);

  return (
    <div className="recent-container">
      <h2>Your Recent spents</h2>
      <div className="expenses-container">
        {Object.keys(showData).map((key) => (
          <div key={showData[key].id} className="expense-card">
            <div className="expense-header">
              <h3 className="expense-title">{showData[key].title}</h3>
            </div>
            <div className="expense-details">
              <div className="expense-amount">${showData[key].amount}</div>
              <div className="expense-date">{showData[key].date}</div>
            </div>
            <div className="edit">
              <button onClick={() => setOpen(key)} className="edit-button">
                Edit Hourly Expenses
              </button>
            </div>
            {Open === key && (
              <HourlyBased expenseTitle={key} onClose={() => setOpen(null)} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
