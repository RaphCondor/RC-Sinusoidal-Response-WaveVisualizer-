import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/logo.png';
import './header.css';

function NavigationBar() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        &nbsp;Arduino Potentiostat - Data Acquisition System
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    );
}

export default NavigationBar;