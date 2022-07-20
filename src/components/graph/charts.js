import React from 'react';
import Button from 'react-bootstrap/Button';
import './charts.css';

import {
    Chart as ChartJS,
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip
);


export const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
        legend: {
            position: 'bottom',
        },
        title: {
            display: true,
            text: '',
        },
    },
    scales: {
        y: {
            type: 'linear',
            display: true,
            position: 'left',
        },
        y1: {
            type: 'linear',
            display: true,
            position: 'right',

            grid: {
                drawOnChartArea: false, // only want the grid lines for one axis to show up
            },
        }
    }
};

function sine_generator(freq, resistance, capacitance, V_max, duration, dp) {

    const x = [];                         //array of time instances
    const volts_in = [];                     //array of volts 
    const volts_out = [];                     //array of volts 
    const current = [];                   //array of current
    let t = 0                             //The representation of the time (x)
    let increase = (duration / dp);

    let Xc = 1 / (2 * Math.PI * freq * capacitance);
    let Z = Math.sqrt(Math.pow(resistance, 2) + Math.pow(Xc, 2));
    let I_max = V_max / Z;
    let phase_change = Math.atan(Xc / resistance);
    let w = Math.PI * 2 * freq;


    //Then, for each cycle we iterate until the whole time sequence (number of samples) has been completed
    for (let i = 0; i <= dp; i += 1) {
        const vol_in = V_max * ((Math.sin(w * t)));
        // const vol_out = (V_max * (1 / (Math.sqrt(1 + Math.pow(resistance * capacitance * freq * 2 * Math.PI, 2)))) * (Math.sin(2 * Math.PI * freq * t + phase_change)));
        // const vol_out = (resistance * vol_in / (Math.sqrt(Math.pow(resistance, 2)) + Math.sqrt(Math.pow(Xc, 2))));
        const vol_out = ((V_max / Math.sqrt((1 + Math.pow((w * resistance * capacitance), 2)))) * (Math.sin(w * t - Math.atan(resistance * capacitance * w))));
        const curr = I_max * ((Math.sin(2 * Math.PI * freq * t + phase_change)));

        //Add the pair of coordinates
        x[i] = t.toPrecision(2);
        volts_in[i] = vol_in;
        volts_out[i] = vol_out;
        current[i] = curr;
        //Move one step forward in the char
        t += increase;
    }
    return [x, volts_in, volts_out, current];
}


export default function Charts({ theoData, type }) {
    const chartData = {};
    let values = [];
    values = sine_generator(theoData[0], theoData[1], theoData[2] * Math.pow(10, -6), theoData[3], theoData[4], theoData[5]);

    function addDataset(newDataset, xAxis, y_axis, title) {
        chartData.datasets = [];
        chartData.datasets = newDataset;
        chartData.labels = xAxis;
        options.scales.y1.display = y_axis;
        options.plugins.title.text = title;
    }
    console.log(chartData);

    if (type === "V") {
        const newDataset = [{
            label: "Voltage Input",
            data: values[1],
            fill: false,
            borderColor: 'red',
            tension: 0.3,
            yAxisID: 'y'
        }, {
            label: "Voltage Output",
            data: values[2],
            fill: false,
            borderColor: 'blue',
            tension: 0.3,
            yAxisID: 'y'
        }];
        addDataset(newDataset, values[0], false, "Voltage vs. Time");
    }
    if (type === "C") {
        const newDataset = [{
            label: "Current",
            data: values[3],
            fill: false,
            borderColor: 'green',
            tension: 0.3,
            yAxisID: 'y'
        }];
        addDataset(newDataset, values[0], false, "Current vs. Time");
    }
    if (type === "VC") {
        const newDataset = [{
            label: "Voltage Input",
            data: values[1],
            fill: false,
            borderColor: 'red',
            tension: 0.3,
            yAxisID: 'y'
        }, {
            label: "Voltage Output",
            data: values[2],
            fill: false,
            borderColor: 'blue',
            tension: 0.3,
            yAxisID: 'y'
        }, {
            label: "Current",
            data: values[3],
            fill: false,
            borderColor: 'green',
            tension: 0.3,
            yAxisID: 'y1'
        }];
        addDataset(newDataset, values[0], true, "Voltage and Current vs. Time");
    }



    return (
        <div className="graph">
            <Line type='line' data={chartData} options={options} />
            <div className="graph_controls_form">
                <Button className="G_controls" >Export data as CSV</Button>
                <Button className="G_controls" >Export graph as PNG</Button>
            </div >
        </div>
    );

}


    // const [JSONdata, setData] = useState([{}])

    // useEffect(() => {
    //     fetch("/data").then(
    //         res => res.json()
    //     ).then(
    //         JSONdata => {
    //             setData(JSONdata)
    //             console.log(JSONdata)
    //         }
    //     )
    // }, [])