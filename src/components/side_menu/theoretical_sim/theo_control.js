import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './theo_control.css';
import React, { useState } from 'react';
import rc_circuit from '../../../assets/rc_circuit.png';


function InputFormControl(props) {

    return (

        <Form.Group className='mb-3'>
            <Form.Label className='title'>{props.name}</Form.Label>
            <Form.Control className="fieldbox" placeholder={props.holder} type='number' onChange={event => props.change(event.target.value)} /><br />
        </Form.Group>
    );
};

export default function Controls({ setTheoData }) {
    const [frequency, setFrequency] = useState(0);
    const [resistance, setResistance] = useState(0);
    const [capacitance, setCapacitance] = useState(0);
    const [voltage, setVoltage] = useState(0);
    const [duration, setDuration] = useState(0);
    const [sampling_rate, setDataPoints] = useState(0);

    const onButtonClick = (arr) => {
        setTheoData(arr);
    }

    return (
        <div className='theo_controls'>
            <Form.Label className="label">RC Circuit Theoretical Analysis</Form.Label><br />
            <div className="circuit_img">
                <img
                    alt=""
                    src={rc_circuit}
                    width="250"
                    height="150"
                    className="d-inline-block align-top"
                />
            </div>
            <Form>
                <InputFormControl name="Frequency" holder="Hz" change={setFrequency}></InputFormControl>
                <InputFormControl name="Resistance" holder="Ω" change={setResistance}></InputFormControl>
                <InputFormControl name="Capacitance" holder="μF" change={setCapacitance}></InputFormControl>
                <InputFormControl name="Voltage" holder="V" change={setVoltage}></InputFormControl>
                <InputFormControl name="Duration (t)" holder="s" change={setDuration}></InputFormControl>
                <InputFormControl name="Data Points" holder="dp" change={setDataPoints}></InputFormControl>
                <Button onClick={() => onButtonClick([frequency, resistance, capacitance, voltage, duration, sampling_rate])} className="button">
                    Simulate RC circuit!
                </Button>
            </Form>
        </div>
    );
}