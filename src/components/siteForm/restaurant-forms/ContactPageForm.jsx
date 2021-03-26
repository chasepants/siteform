import { Form } from 'react-bootstrap';

function ContactPageForm({phone, setPhone, email, setEmail}) {
    return (         
        <>   
            <Form.Group>
                <Form.Label>Phone #:</Form.Label>
                <Form.Control
                    onChange={event => setPhone(event.target.value)} 
                    value={phone} 
                    type="text"
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                    onChange={event => setEmail(event.target.value)} 
                    value={email}
                    type="text"
                />
            </Form.Group>
        </>
    )
}

export default ContactPageForm;


