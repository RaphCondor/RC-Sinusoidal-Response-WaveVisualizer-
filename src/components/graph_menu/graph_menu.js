import Form from 'react-bootstrap/Form';
import './graph_menu.css';
import React from 'react';

export default function GraphMenu({setType}) {
    
    return (
        <div className='graph_menu'>
            <Form className="graph_menu_form">
                <fieldset>
                    <Form.Group className='mb-3'>
                        <Form.Label className="titled">Technique:</Form.Label>
                        <Form.Select onChange={(event) => setType(event.target.value)} className='dropdown'>
                            <option value="V">Voltage vs Time</option>
                            <option value="C">Current vs Time</option>
                            <option value="VC">Voltage and Current vs Time</option>
                            {/* <option value="Cy">Cyclic Voltamettry</option>
                            <option value="Im">Impedance vs. Frequency</option> */}
                        </Form.Select>
                    </Form.Group>
                </fieldset>
            </Form>
        </div>
    );
}


// class GraphMenu extends React.Component {
    //     constructor(props) {
    //         super(props);
    //         this.state = { value: 'Voltage' };
    
    //         this.handleChange = this.handleChange.bind(this);
    //         this.handleSubmit = this.handleSubmit.bind(this);
    //     }
    
    //     handleChange(event) {
    //         this.setState({ value: event.target.value });
    //     }
    
    //     handleSubmit(event) {
    //         alert(this.state.value);
    //         event.preventDefault();
    //     }
    
    //     render() {
    //         return (
    //             <div className='graph_menu'>
    //                 <Form onSubmit={this.handleSubmit} className="graph_menu_form">
    //                     <fieldset>
    //                         <Form.Group className='mb-3'>
    //                             <Form.Label className="titled">Technique:</Form.Label>
    //                             <Form.Select value={this.state.value} onChange={this.handleChange} className='dropdown'>
    //                                 <option value="Voltage">Voltage vs Time</option>
    //                                 <option value="Current">Current vs Time</option>
    //                                 <option value="Cyclic">Cyclic Voltamettry</option>
    //                             </Form.Select>
    //                         </Form.Group>
    //                     </fieldset>
    //                 </Form>
    //             </div>
    //         );
    //     }
    // }