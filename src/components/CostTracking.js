import React, { useState } from 'react';
import styled from 'styled-components';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Styled Components
const Container = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f0f4f7;
  max-width: 1200px;
  margin: 0 auto; /* Center the container */
`;

const Header = styled.h1`
  font-size: 2.5em;
  margin-bottom: 30px;
  color: #333;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 2em; /* Reduce font size for smaller screens */
  }
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-bottom: 40px;
  width: 100%;
  max-width: 800px;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 600px) {
    grid-template-columns: 1fr; /* Stack fields on smaller screens */
  }
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 1em;
`;

const Button = styled.button`
  padding: 12px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1.2em;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }

  grid-column: span 2;

  @media (max-width: 600px) {
    font-size: 1em; /* Smaller button size on smaller screens */
  }
`;

const BarChartContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin-bottom: 30px;
`;

const Summary = styled.div`
  margin-top: 20px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 800px;
`;

const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 1.3em;
  color: #333;
`;

const RecordsContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 30px;
`;

const RecordsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const TableHeader = styled.th`
  padding: 15px;
  background-color: #4caf50;
  color: white;
  font-size: 1.1em;
  text-align: left;

  @media (max-width: 600px) {
    font-size: 1em; /* Smaller header font size on smaller screens */
  }
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableData = styled.td`
  padding: 15px;
  text-align: left;
  border-bottom: 1px solid #ddd;

  @media (max-width: 600px) {
    font-size: 0.9em; /* Smaller table data font size on smaller screens */
  }
`;

const PrintButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  font-size: 1.1em;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 600px) {
    font-size: 1em; /* Smaller print button size on smaller screens */
  }
`;

// Main Component
const CostTracking = () => {
  const [form, setForm] = useState({
    from: '',
    to: '',
    amountAdded: 0,
    amountDeducted: 0,
    purpose: '',
  });

  const [transactions, setTransactions] = useState([]);
  const [totalProfit, setTotalProfit] = useState(0);
  const [suggestions, setSuggestions] = useState([]);

  const purposes = ["Fertilizer", "Seeds", "Pesticides", "Labor", "Equipment"]; // Example purposes

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });

    // Provide suggestions based on input
    if (name === 'purpose') {
      const filteredSuggestions = purposes.filter(p => p.toLowerCase().includes(value.toLowerCase()));
      setSuggestions(filteredSuggestions);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { from, to, amountAdded, amountDeducted, purpose } = form;
    const transaction = {
      from,
      to,
      amountAdded: parseFloat(amountAdded),
      amountDeducted: parseFloat(amountDeducted),
      purpose,
    };
    setTransactions([...transactions, transaction]);

    const profit = transaction.amountAdded - transaction.amountDeducted;
    setTotalProfit(totalProfit + profit);

    // Reset form fields
    setForm({
      from: '',
      to: '',
      amountAdded: 0,
      amountDeducted: 0,
      purpose: '',
    });
    setSuggestions([]); // Clear suggestions
  };

  const data = {
    labels: transactions.map((_, index) => `Transaction ${index + 1}`),
    datasets: [
      {
        label: 'Amount Added',
        data: transactions.map((t) => t.amountAdded),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Amount Deducted',
        data: transactions.map((t) => t.amountDeducted),
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  const printTable = () => {
    window.print();
  };

  return (
    <Container>
      <Header>Cost and Profit Monitoring</Header>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="from"
          placeholder="From"
          value={form.from}
          onChange={handleInputChange}
          required
        />
        <Input
          type="text"
          name="to"
          placeholder="To"
          value={form.to}
          onChange={handleInputChange}
          required
        />
        <Input
          type="number"
          name="amountAdded"
          placeholder="Amount Added"
          value={form.amountAdded}
          onChange={handleInputChange}
          required
        />
        <Input
          type="number"
          name="amountDeducted"
          placeholder="Amount Deducted"
          value={form.amountDeducted}
          onChange={handleInputChange}
          required
        />
        <Input
          type="text"
          name="purpose"
          placeholder="Purpose"
          value={form.purpose}
          onChange={handleInputChange}
        />
        {suggestions.length > 0 && (
          <ul style={{ listStyle: 'none', padding: 0, margin: '0', position: 'absolute', backgroundColor: 'white', zIndex: '10', border: '1px solid #ccc', borderRadius: '5px', width: '100%' }}>
            {suggestions.map((suggestion, index) => (
              <li key={index} onClick={() => setForm({ ...form, purpose: suggestion })} style={{ cursor: 'pointer', background: '#f1f1f1', margin: '5px 0', padding: '10px', borderRadius: '5px' }}>
                {suggestion}
              </li>
            ))}
          </ul>
        )}
        <Button type="submit">Add Transaction</Button>
      </Form>

      <BarChartContainer>
        <Bar data={data} options={{ responsive: true, plugins: { legend: { position: 'top' }, title: { display: true, text: 'Transactions Overview' }, } }} />
      </BarChartContainer>

      <Summary>
        <h2>Summary</h2>
        <SummaryItem>
          <span>Total Profit:</span>
          <span>₹{totalProfit}</span>
        </SummaryItem>
      </Summary>

      <RecordsContainer>
        <h2>Transaction Records</h2>
        <RecordsTable>
          <thead>
            <tr>
              <TableHeader>From</TableHeader>
              <TableHeader>To</TableHeader>
              <TableHeader>Purpose</TableHeader>
              <TableHeader>Amount Added</TableHeader>
              <TableHeader>Amount Deducted</TableHeader>
              <TableHeader>Net Result</TableHeader>
            </tr>
          </thead>
          <tbody>
            {transactions.map((t, index) => (
              <TableRow key={index}>
                <TableData>{t.from}</TableData>
                <TableData>{t.to}</TableData>
                <TableData>{t.purpose}</TableData>
                <TableData>{t.amountAdded}</TableData>
                <TableData>{t.amountDeducted}</TableData>
                <TableData>
                  {t.amountAdded - t.amountDeducted >= 0
                    ? `Profit of ₹${t.amountAdded - t.amountDeducted}`
                    : `Loss of ₹${t.amountDeducted - t.amountAdded}`}
                </TableData>
              </TableRow>
            ))}
          </tbody>
        </RecordsTable>
        <PrintButton onClick={printTable}>Print Records</PrintButton>
      </RecordsContainer>
    </Container>
  );
};

export default CostTracking;



