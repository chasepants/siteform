import { Form } from 'react-bootstrap';

function ContactPageFormFields() {
    return (
        <>
            <Form.Group>
                <Form.Label>HOURS</Form.Label>
                <Form.Control
                    // onChange={event => setHours(event.target.value)}
                    // value={hours}
                    type="text"    
                />
            </Form.Group>       
            <Form.Group>
                <Form.Label>PHONE:</Form.Label>
                <Form.Control
                        // onChange={event => setPhone(event.target.value)} 
                        // value={phone} 
                        type="text"
                    />
            </Form.Group>
            <Form.Group>
                <Form.Label>EMAIL</Form.Label>
                <Form.Control
                    // onChange={event => setEmail(event.target.value)} 
                    // value={email}
                    type="text"
                />
            </Form.Group>
        </>
    )
}

export default ContactPageFormFields;