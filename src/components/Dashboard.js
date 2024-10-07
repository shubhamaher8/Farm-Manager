import React, { useState } from 'react';
import styled from 'styled-components';
import { Line } from 'react-chartjs-2';
import DatePicker from 'react-datepicker'; // Import DatePicker
import "react-datepicker/dist/react-datepicker.css"; // Import DatePicker styles
import { useNavigate } from 'react-router-dom'; // Import useNavigate from React Router
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// Styled Components
const DashboardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); /* Responsive grid */
  gap: 20px;
  padding: 20px;
  max-width: 1200px; /* Maximum width for large screens */
  margin: 0 auto; /* Center the container */

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Stack cards on smaller screens */
  }
`;

const Card = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1); /* Improved shadow */
  transition: transform 0.3s, box-shadow 0.3s; /* Smooth transition for shadow and transform */

  &:hover {
    transform: translateY(-5px); /* Lift effect on hover */
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2); /* Shadow effect on hover */
  }
`;

const Header = styled.h2`
  font-size: 1.5em;
  margin-bottom: 10px;
  color: #333; /* Darker text for better readability */
  font-weight: 600; /* Semi-bold font weight */
`;

const ReminderInput = styled.input`
  width: 100%; /* Full width */
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;

  @media (max-width: 768px) {
    width: 95%; /* Adjust width for smaller screens */
  }
`;

const ReminderButton = styled.button`
  padding: 10px 20px;
  margin-top: 10px;
  background-color: #4CAF50; /* Green */
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }
`;

const ReminderList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ReminderItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
`;

const CalendarContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

const AddExpenseButton = styled.button`
  padding: 10px 20px;
  margin-top: 10px;
  background-color: #ff9800; /* Orange */
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e68a00;
  }
`;

const Dashboard = () => {
  const [date, setDate] = useState(new Date()); // State for the calendar
  const [reminder, setReminder] = useState('');
  const [reminders, setReminders] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Data for Yield Estimation chart
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Yield Estimation (tons)',
        data: [65, 59, 80, 81, 56, 55],
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  const addReminder = () => {
    if (reminder) {
      setReminders([...reminders, { text: reminder, date: date.toLocaleDateString(), completed: false }]);
      setReminder('');
    }
  };

  const toggleCompletion = (index) => {
    const updatedReminders = reminders.map((item, i) =>
      i === index ? { ...item, completed: !item.completed } : item
    );
    setReminders(updatedReminders);
  };

  // Function to handle redirect to Cost and Tracking page
  const handleAddExpensesClick = () => {
    navigate('/cost-tracking'); // Redirect to the cost-tracking page
  };

  return (
    <DashboardContainer>
      <Card>
        <Header>Growth and Health Tracking</Header>
        <p>Monitor the overall health of your crops using professional techniques.</p>
      </Card>

      <Card>
        <Header>Cost and Profit Monitoring</Header>
        <p>Track the costs and profits for your farming activities.</p>
        <AddExpenseButton onClick={handleAddExpensesClick}>Add Expenses</AddExpenseButton>
      </Card>

      <Card>
        <Header>Activity Planning</Header>
        <p>Plan farming activities according to the current calendar.</p>
        <CalendarContainer>
          <DatePicker selected={date} onChange={(date) => setDate(date)} />
          <ReminderInput
            type="text"
            value={reminder}
            onChange={(e) => setReminder(e.target.value)}
            placeholder="Add a reminder..."
          />
          <ReminderButton onClick={addReminder}>Add Reminder</ReminderButton>
          <ReminderList>
            {reminders.map((item, index) => (
              <ReminderItem key={index}>
                <span style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
                  {item.text} (Due: {item.date})
                </span>
                <input
                  type="checkbox"
                  checked={item.completed}
                  onChange={() => toggleCompletion(index)}
                />
              </ReminderItem>
            ))}
          </ReminderList>
        </CalendarContainer>
      </Card>

      <Card>
        <Header>Yield Estimation</Header>
        <Line data={data} />
        <p>Analyze the predicted yield estimation over the months.</p>
      </Card>
    </DashboardContainer>
  );
};

export default Dashboard;







