import Alert from 'react-bootstrap/Alert'


function alertTag() {
    return (<Alert variant="success">
        <Alert.Heading>Welcome to Waveform Generator,</Alert.Heading>
        <p>
            Generate a wave from an Arduino using the controls below!
        </p>
    </Alert>);
};


export default alertTag;