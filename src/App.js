import './App.css';
import './components/header/header.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/header/header.js';
// import Controls from './components/side_menu/controls';
import Chart from './components/graph/charts.js';
// import BottomChart from './components/graph/bottom_chart.js';
import GraphMenu from './components/graph_menu/graph_menu'
import TheoControls from './components/side_menu/theoretical_sim/theo_control'
import '../src/components/side_menu/controls.css'
import React, { useState } from 'react';


export default function App() {
  const [theoData, setTheoData] = useState([]);
  const [type, setType] = useState("V");

  return (
    <div className="App">
      <div className='App-header'>
        <NavigationBar />
        <div className='controls'>
          <div className='side_menu'>
            <TheoControls setTheoData={setTheoData} ></TheoControls>
            {/* <Controls ></Controls> */}
          </div>
        </div>
        <div className='graph_container'>
          <GraphMenu setType={setType}></GraphMenu>
          <Chart type={type} theoData={theoData}></Chart>
        </div>
        {/* <div className='graph1'><BottomChart type={type} theoData={theoData}></BottomChart></div> */}
      </div>
    </div>
  );
}


