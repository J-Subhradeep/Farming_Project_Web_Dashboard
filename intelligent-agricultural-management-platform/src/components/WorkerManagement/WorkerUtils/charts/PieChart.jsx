import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';

// Register the elements that are required for the pie chart
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ completedTasks, pendingTasks, missedTasks }) => {
    const data = {
        labels: ['Completed Tasks', 'Pending Tasks', 'Missed Tasks'],
        datasets: [
            {
                label: 'Task Analytics',
                data: [completedTasks, pendingTasks, missedTasks],
                backgroundColor: ['#36A2EB', '#FFCE56', '#FF6384'],
                hoverBackgroundColor: ['#36A2EB', '#FFCE56', '#FF6384'],
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
            },
        },
    };

    return (
        <div style={{ width: '50%', height: '500px' }}>
            <Pie data={data} options={options} />
        </div>
    );
};

export default PieChart;