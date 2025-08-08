import React from "react";
import "./index.css";
import profilePic from "/profile.jpg";

const fines = [
  { title: "The Great Gatsby", issue: "05/01/2024", due: "14/01/2024", overdue: 96, amount: 20 },
  { title: "1984", issue: "28/12/2023", due: "11/01/2024", overdue: 104, amount: 25 },
  { title: "To Kill a Mockingbird", issue: "16/12/2023", due: "24/12/2023", overdue: 122, amount: 20 },
  { title: "Pride and Prejudice", issue: "29/11/2023", due: "14/12/2023", overdue: 132, amount: 20 }
];

function App() {
  const totalFine = fines.reduce((sum, f) => sum + f.amount, 0);

  return (
    <div className="container">
      <div className="card">
        
        {/* Header */}
        <div className="header">
          <img src={profilePic} alt="Profile" className="avatar" />
          <div className="name">Emma Brown</div>
          <button className="pay-all">Pay All</button>
        </div>

        {/* Total Fine */}
        <div className="total-fine">
          <h3>₹{totalFine}.00</h3>
          <p>Total Fine</p>
        </div>

        {/* Fine Table */}
        <table className="fine-table">
          <thead>
            <tr>
              <th>Book Title</th>
              <th>Issue Date</th>
              <th>Due Date</th>
              <th>Days Overdue</th>
              <th>Fine Amount</th>
            </tr>
          </thead>
          <tbody>
            {fines.map((fine, index) => (
              <tr key={index}>
                <td>{fine.title}</td>
                <td>{fine.issue}</td>
                <td>{fine.due}</td>
                <td>{fine.overdue}</td>
                <td>
                  <button className="pay-btn">Pay</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
}

export default App;
