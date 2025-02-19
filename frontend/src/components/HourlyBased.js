import React, { useContext, useState, useEffect } from "react";
import { expenseContext } from "../pages/ExpensiveTracker";

export default function HourlyBased({ expenseTitle, onClose }) {
  const { showData, setshowData } = useContext(expenseContext);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editValue, setEditValue] = useState("");

  useEffect(() => {
    console.log("HourlyBased mounted with expenseId:", expenseTitle);
  }, [expenseTitle]);

  const currentExpense = showData[expenseTitle];

  const hours = Array.from({ length: 24 }, (_, i) => {
    const hour = i.toString().padStart(2, "0");
    return `${hour}:00`;
  });

  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditValue(
      currentExpense?.hourlyExpenses?.[index]?.amount?.toString() || "0"
    );
  };

  const handleSave = (hourIndex) => {
    setshowData((prevData) => ({
      ...prevData,
      [expenseTitle]: {
        ...prevData[expenseTitle],
        hourlyExpenses: prevData[expenseTitle].hourlyExpenses.map(
          (expense, index) =>
            index === hourIndex
              ? { amount: parseFloat(editValue) || 0 }
              : expense
        ),
      },
    }));
    setEditingIndex(null);
    setEditValue("");
  };
  const handleCancel = () => {
    setEditingIndex(null);
    setEditValue("");
  };

  const calculateTotal = () => {
    return (
      currentExpense?.hourlyExpenses?.reduce(
        (sum, hour) => sum + (hour?.amount || 0),
        0
      ) || 0
    );
  };

  if (!currentExpense) {
    return null;
  }

  return (
    <div className="modal-container">
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="modal-title">
            {currentExpense?.title} - Hourly Breakdown
          </h2>
          <button onClick={onClose} className="modal-close-btn">
            ✕
          </button>
        </div>

        <div className="modal-body">
          <div className="space-y-2">
            {hours.map((hour, index) => (
              <div key={hour} className="modal-item">
                <div className="modal-hour">{hour}</div>

                {editingIndex === index ? (
                  <div className="modal-edit-section">
                    <input
                      type="number"
                      value={editValue}
                      onChange={(e) => setEditValue(e.target.value)}
                      className="modal-input"
                      placeholder="Enter amount"
                      min="0"
                      step="0.01"
                    />
                    <button
                      onClick={() => handleSave(index)}
                      className="modal-btn save-btn"
                    >
                      Save
                    </button>
                    <button
                      onClick={handleCancel}
                      className="modal-btn cancel-btn"
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center gap-4">
                    <span className="amount-display">
                      $
                      {(
                        currentExpense?.hourlyExpenses?.[index]?.amount || 0
                      ).toFixed(2)}
                    </span>
                    <button
                      onClick={() => handleEdit(index)}
                      className="modal-btn edit-btn"
                    >
                      Edit
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="modal-footer">
            <div className="total-amount">
              Total: ${calculateTotal().toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
