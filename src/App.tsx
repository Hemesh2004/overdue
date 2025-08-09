import './App.css';

function App() {
  const fines = [
    { book: 'Book 1', days: 5, fine: 10 },
    { book: 'Book 2', days: 8, fine: 15 },
    { book: 'Book 3', days: 2, fine: 5 },
  ];

  const totalFine = fines.reduce((sum, f) => sum + f.fine, 0);

  return (
    <div className="app-container">
      {/* Header */}
      <div className="header">
        <img
          src="https://via.placeholder.com/60"
          alt="avatar"
          className="avatar"
        />
        <div className="name">John Doe</div>
        <button className="pay-all">Pay All</button>
      </div>

      {/* Total Fine */}
      <div className="total-fine">
        <h3>₹{totalFine}</h3>
        <p>Total Fine</p>
      </div>

      {/* Table */}
      <table className="fine-table">
        <thead>
          <tr>
            <th>Book Name</th>
            <th>Days Overdue</th>
            <th>Fine Amount</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {fines.map((f, idx) => (
            <tr key={idx}>
              <td>{f.book}</td>
              <td>{f.days}</td>
              <td>₹{f.fine}</td>
              <td>
                <button className="pay-btn">Pay Now</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
