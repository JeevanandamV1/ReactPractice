import React, { useContext } from "react";
import "../styles/components/Form.css";
import { expenseContext } from "../pages/ExpensiveTracker";

export default function Form() {
  const { setIsOpen, handleSubmit, handleChange, formData } =
    useContext(expenseContext);

  return (
    <div className="modal">
      <div className="modalContent">
        <h3 className="modalTitle">Add New Expense</h3>
        <form onSubmit={handleSubmit}>
          <div className="formGroup">
            <label className="label" htmlFor="title">
              Title
            </label>
            <input
              className="input"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter expense title"
              required
            />
          </div>

          <div className="formGroup">
            <label className="label" htmlFor="amount">
              Amount
            </label>
            <input
              className="input"
              id="amount"
              name="amount"
              type="number"
              min={0}
              value={formData.amount}
              onChange={handleChange}
              placeholder="Enter amount"
              required
            />
          </div>

          <div className="formGroup">
            <label className="label" htmlFor="date">
              Date
            </label>
            <input
              className="input"
              id="date"
              name="date"
              type="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>

          <div className="footer">
            <button
              type="button"
              className="cancelButton"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </button>
            <button type="submit" className="submitButton">
              Save Expense
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
