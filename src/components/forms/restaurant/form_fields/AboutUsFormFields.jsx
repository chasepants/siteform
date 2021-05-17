import { Form } from 'react-bootstrap';

//@todo update state to redux

function AboutUsFormFields() {
    return (
        <>
            <Form.Group>
                <Form.Label>ESTABLISHED:</Form.Label>
                <Form.Control
                    // onChange={event => setEstablished(event.target.value)} 
                    // value={established} 
                    type="text"
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>BIO:</Form.Label>
                <Form.Control
                    // onChange={event => setOwnersBio(event.target.value)} 
                    // value={ownersBio}
                    type="text"
                />
            </Form.Group>
        </>
    );
}

export default AboutUsFormFields;