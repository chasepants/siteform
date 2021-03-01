import { Form } from 'react-bootstrap';

function AboutUsForm({established, setEstablished, ownersBio, setOwnersBio}) {
    return (         
        <>   
            <Form.Group>
                <Form.Label>Established:</Form.Label>
                <Form.Control
                    onChange={event => setEstablished(event.target.value)} 
                    value={established} 
                    type="text"
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>About The Owners</Form.Label>
                <Form.Control
                    onChange={event => setOwnersBio(event.target.value)} 
                    value={ownersBio}
                    type="text"
                />
            </Form.Group>
        </>
    )
}

export default AboutUsForm;


