import './App.css';

interface OverdueItem {
  id: number;
  name: string;
  dueDate: string;
  daysOverdue: number;
  fineAmount: number;
}

function App() {
  const overdueItems: OverdueItem[] = [
    { id: 1, name: 'Book A', dueDate: '2025-08-05', daysOverdue: 4, fineAmount: 10 },
    { id: 2, name: 'Book B', dueDate: '2025-08-01', daysOverdue: 8, fineAmount: 15 },
    { id: 3, name: 'Book C', dueDate: '2025-07-28', daysOverdue: 12, fineAmount: 20 },
  ];

  const totalFine = overdueItems.reduce((sum, item) => sum + item.fineAmount, 0);

  return (
    <div className="app-container">
      <div className="total-fine">
        <h3>Total Fine</h3>
        <p className="amount">${totalFine}</p>
      </div>

      <table className="overdue-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Item Name</th>
            <th>Due Date</th>
            <th>Days Overdue</th>
            <th>Fine Amount</th> {/* NEW COLUMN */}
            <th>Pay Now</th>
          </tr>
        </thead>
        <tbody>
          {overdueItems.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.dueDate}</td>
              <td>{item.daysOverdue}</td>
              <td>${item.fineAmount}</td> {/* NEW DATA */}
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
