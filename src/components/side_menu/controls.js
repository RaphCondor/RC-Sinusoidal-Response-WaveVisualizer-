import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './controls.css';
import React from 'react';
// import rc_circuit from '../../assets/rc_circuit.png';

function SliderWithInputFormControl(props) {
    return (

        <Form.Group className='mb-3'>
            <Form.Label className='title'>{props.name}</Form.Label>
            <Form.Control className="fieldbox" value={props.val} type='number' onChange={props.change} />
            <Form.Range
                value={props.val}
                onChange={props.change}
            />
        </Form.Group>

    );

};

// function InputFormControl(props) {

//     return (

//         <Form.Group className='mb-3'>
//             <Form.Label className='title'>{props.name}</Form.Label>
//             <Form.Control className="fieldbox" placeholder={props.holder} type='number' /><br />
//         </Form.Group>
//     );

// };

function SliderWithDropDownControl(props) {

    return (

        <Form.Group className='mb-3'>
            <Form.Select value={props.option} onChange={props.opt_change} id="wave_controls" className='dropdown'>
                <option value="DP">Data points</option>
                <option value="T">Time in Seconds</option>
                <option value="C"># of Cycles</option>
            </Form.Select>
            <Form.Control className="fieldbox" value={props.val} type='number' onChange={props.change} />
            <Form.Range
                value={props.val}
                onChange={props.change}
            />
        </Form.Group>

    );

};

class Controls extends React.Component {
    constructor(props) {
        super(props);
        this.state = { frequency: 50, amplitude: 50, time_option: 'DP', time: 50 };
    }

    handleFrequencyChange = (event) => {
        this.setState({
            frequency: event.target.value
        })
    }

    handleAmplitudeChange = (event) => {
        this.setState({
            amplitude: event.target.value
        })
    }

    handleTimeChange = (event) => {
        this.setState({
            time: event.target.value
        })
    }
    handleTime_OptionChange = (event) => {
        this.setState({
            time_option: event.target.value
        })
    }

    handleSubmit = event => {
        alert(`${this.state.dutyCycle
            } ${this.state.frequency} ${this.state.amplitude} ${this.state.time_option} ${this.state.time}`);
        event.preventDefault();
    }

    handleSubmitTheo = event => {
        alert(`${this.state.dutyCycle
            } ${this.state.frequency} ${this.state.amplitude} ${this.state.time_option} ${this.state.time}`);
        event.preventDefault();
    }

    render() {
        return (

            <div className='side_menu'>

                {/* <Form.Label className="label">RC Circuit Theoretical Analysis</Form.Label><br />
                <div className="circuit_img">
                    <img
                        alt=""
                        src={rc_circuit}
                        width="250"
                        height="150"
                        className="d-inline-block align-top"
                    />
                </div>

                <div className='theo_controls'>
                    <Form onSubmit={this.handleSubmitTheo}>
                        <InputFormControl name="Frequency" holder="Hz" ></InputFormControl>
                        <InputFormControl name="Resistance" holder="Ω"></InputFormControl>
                        <InputFormControl name="Capacitance" holder="μF"></InputFormControl>
                        <InputFormControl name="Voltage" holder="V"></InputFormControl>
                        <InputFormControl name="Duration (t)" holder="s"></InputFormControl>
                        <InputFormControl name="Sampling Rate" holder="dp"></InputFormControl>
                        <Button type="submit" className="button">
                            Simulate RC circuit!
                        </Button>
                    </Form>
                </div> */}

                <Form onSubmit={this.handleSubmit}>
                    <fieldset>
                        <Form.Label className="label">Experimental Waveform Controls</Form.Label>
                        <SliderWithInputFormControl name="Frequency (Hz)" val={this.state.frequency} change={this.handleFrequencyChange} />
                        <SliderWithInputFormControl name="Amplitude (V)" val={this.state.amplitude} change={this.handleAmplitudeChange} />

                        <Form.Label className="label">Time</Form.Label><br />
                        <SliderWithDropDownControl option={this.state.time_option} val={this.state.time} change={this.handleTimeChange} opt_change={this.handleTime_OptionChange} />
                        <Button type="submit" className="button">
                            Generate Graph
                        </Button>
                    </fieldset>
                </Form>
            </div >
        );
    }
}


export default Controls;