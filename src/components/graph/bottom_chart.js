import React from 'react';
import './charts.css'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
        legend: {
            position: 'bottom'
        },
    },
};

const labels = [0, 1, 2, 3, 4, 5, 6, 7];

export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: [43, 23, 12, 3, 21, 32, 231],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Dataset 2',
            data: [76, 56, 45, 34, 9, 54, 31],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};

export default function BottomChart() {
    return <Line options={options} data={data} />;
}
