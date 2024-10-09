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

const MainContent = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    flex-direction: column; /* Stack elements vertically on mobile */
    align-items: center; /* Center elements on mobile */
  }
`;

const FormContainer = styled.div`
  flex: 1; /* Allows the form to take up equal space */
  margin-right: 20px; /* Space between form and chart */
  width: 100%; /* Ensure full width on mobile */

  @media (max-width: 768px) {
    margin-right: 0; /* Remove right margin on mobile */
  }
`;

const ChartContainer = styled.div`
  flex: 1; /* Allows the chart to take up equal space */
  width: 100%; /* Ensure full width on mobile */

  @media (max-width: 768px) {
    margin-top: 20px; /* Add top margin to chart on mobile */
  }
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
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Stack form fields vertically on mobile */
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
  background-color: green; /* Changed to green */
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  font-size: 1.1em;

  &:hover {
    background-color: darkgreen; /* Darker green on hover */
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
      <MainContent>
        <FormContainer>
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
              <ul style={{ position: 'absolute', backgroundColor: 'white', border: '1px solid #ccc', listStyle: 'none', padding: '0', margin: '0' }}>
                {suggestions.map((suggestion, index) => (
                  <li key={index} style={{ padding: '5px', cursor: 'pointer', borderBottom: '1px solid #f1f1f1' }}>
                    {suggestion}
                  </li>
                ))}
              </ul>
            )}
            <Button type="submit">Add Transaction</Button>
          </Form>
          <Summary>
            <h3>Total Profit: ${totalProfit.toFixed(2)}</h3>
          </Summary>
        </FormContainer>
        <ChartContainer>
          <Bar data={data} options={{ responsive: true }} />
        </ChartContainer>
      </MainContent>
      <RecordsContainer>
        <h2>Transaction Records</h2>
        <RecordsTable>
          <thead>
            <tr>
              <TableHeader>From</TableHeader>
              <TableHeader>To</TableHeader>
              <TableHeader>Amount Added</TableHeader>
              <TableHeader>Amount Deducted</TableHeader>
              <TableHeader>Purpose</TableHeader>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <TableRow key={index}>
                <TableData>{transaction.from}</TableData>
                <TableData>{transaction.to}</TableData>
                <TableData>${transaction.amountAdded.toFixed(2)}</TableData>
                <TableData>${transaction.amountDeducted.toFixed(2)}</TableData>
                <TableData>{transaction.purpose}</TableData>
              </TableRow>
            ))}
          </tbody>
        </RecordsTable>
      </RecordsContainer>
      <PrintButton onClick={printTable}>Print Records</PrintButton>
    </Container>
  );
};

export default CostTracking;





