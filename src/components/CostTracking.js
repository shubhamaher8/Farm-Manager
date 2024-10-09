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
  margin: 0 auto;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const FormContainer = styled.div`
  flex: 1;
  margin-right: 20px;
  width: 100%;

  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

const ChartContainer = styled.div`
  flex: 1;
  width: 100%;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const Header = styled.h1`
  font-size: 2.5em;
  margin-bottom: 30px;
  color: #333;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 2em;
  }
`;



const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr; /* Two equal columns */
  gap: 20px;
  margin-bottom: 40px;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Stack form fields on small screens */
  }
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 1em;
  width: 100%; /* Ensure input takes full width */
  box-sizing: border-box; /* Ensure padding doesn't affect total width */

  @media (max-width: 600px) {
    font-size: 0.9em; /* Slightly smaller input on smaller screens */
  }
`;

const Button = styled.button`
  padding: 12px;
  border: none;
  border-radius: 5px;
  font-size: 1.2em;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
  grid-column: span 2; /* Span across both columns */
  margin-top: 10px;

  &:hover {
    transform: scale(1.05);
  }

  &.credit {
    background-color: #4caf50;
    color: white;

    &:hover {
      background-color: #45a049;
    }
  }

  &.debit {
    background-color: #f44336;
    color: white;

    &:hover {
      background-color: #e53935;
    }
  }

  @media (max-width: 768px) {
    grid-column: span 1; /* Span one column on small screens */
    font-size: 1em;
  }
`;

const TransactionTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;

  th,
  td {
    padding: 10px;
    border: 1px solid #ddd;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
  }

  tr {
    transition: background-color 0.3s;

    &:hover {
      background-color: #f1f1f1;
    }
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
    font-size: 1em;
  }
`;

const TableRow = styled.tr`
  background-color: ${({ type }) =>
    type === 'credit' ? 'rgba(173, 216, 230, 0.3)' : 'rgba(255, 182, 193, 0.3)'};
`;

const TableData = styled.td`
  padding: 15px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  color: black;

  @media (max-width: 600px) {
    font-size: 0.9em;
  }
`;

const CenteredButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PrintButton = styled.button`
  padding: 10px;
  background-color: green;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.1em;

  &:hover {
    background-color: darkgreen;
  }

  @media (max-width: 600px) {
    font-size: 1em;
  }
`;

// Main Component
const CostTracking = () => {
  const [form, setForm] = useState({
    from: '',
    to: '',
    amountAdded: 0,
    purpose: '',
    type: 'credit', // Default to credit
  });

  const [transactions, setTransactions] = useState([]);
  const [totalProfit, setTotalProfit] = useState(0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleTransaction = (type) => (e) => {
    e.preventDefault();
    const { from, to, amountAdded, purpose } = form;
    const transaction = {
      from,
      to,
      amountAdded: parseFloat(amountAdded),
      purpose,
      type,
    };
    setTransactions([...transactions, transaction]);

    const profit = type === 'credit' ? parseFloat(amountAdded) : -parseFloat(amountAdded);
    setTotalProfit(totalProfit + profit);

    setForm({
      from: '',
      to: '',
      amountAdded: 0,
      purpose: '',
      type: 'credit',
    });
  };

  const data = {
    labels: transactions.map((_, index) => `Transaction ${index + 1}`),
    datasets: [
      {
        label: 'Amount Added',
        data: transactions.filter(t => t.type === 'credit').map(t => t.amountAdded),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Amount Deducted',
        data: transactions.filter(t => t.type === 'debit').map(t => t.amountAdded),
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  const printTable = () => {
    const table = document.getElementById('transaction-table').outerHTML;
    const style = `<style>
      table {
        width: 100%;
        border-collapse: collapse;
      }
      th, td {
        border: 1px solid black;
        padding: 10px;
      }
      tr:nth-child(even) {
        background-color: #f2f2f2;
      }
    </style>`;
    const printWindow = window.open('', '', 'height=600,width=800');
    printWindow.document.write('<html><head><title>Transaction Records</title>');
    printWindow.document.write(style);
    printWindow.document.write('</head><body >');
    printWindow.document.write(table);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <Container>
      <Header>Cost and Profit Monitoring</Header>
      <MainContent>
        <FormContainer>
          <Form>
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
              type="text"
              name="purpose"
              placeholder="Purpose"
              value={form.purpose}
              onChange={handleInputChange}
              required
            />
            <Button type="button" onClick={handleTransaction('credit')}>Credit</Button>
            <Button type="button" onClick={handleTransaction('debit')}>Debit</Button>
          </Form>
        </FormContainer>
        <ChartContainer>
          <Bar data={data} />
        </ChartContainer>
      </MainContent>
      <Summary>
        <SummaryItem>
          <span>Total Profit:</span>
          <span>{totalProfit}</span>
        </SummaryItem>
      </Summary>
      <RecordsContainer>
        <RecordsTable id="transaction-table">
          <thead>
            <tr>
              <TableHeader>From</TableHeader>
              <TableHeader>To</TableHeader>
              <TableHeader>Amount Added</TableHeader>
              <TableHeader>Purpose</TableHeader>
              <TableHeader>Type</TableHeader>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <TableRow key={index} type={transaction.type}>
                <TableData>{transaction.from}</TableData>
                <TableData>{transaction.to}</TableData>
                <TableData>{transaction.amountAdded}</TableData>
                <TableData>{transaction.purpose}</TableData>
                <TableData>{transaction.type}</TableData>
              </TableRow>
            ))}
          </tbody>
        </RecordsTable>
        <CenteredButton>
          <PrintButton onClick={printTable}>Print Transactions</PrintButton>
        </CenteredButton>
      </RecordsContainer>
    </Container>
  );
};

export default CostTracking;
