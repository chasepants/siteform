import { Form } from 'react-bootstrap';

//@todo move state to redux

function HomePageFormFields() {
    return (
        <>
            <Form.Group>
                <Form.Label>BUSINESS_NAME</Form.Label>
                <Form.Control
                    // onChange={event => setBusinessName(event.target.value)} 
                    // value={businessName} 
                    type="text"
                />
                <Form.Text className="text-muted">
                    This will be displayed as the main title
                </Form.Text>
            </Form.Group>
            <Form.Group>
                <Form.Label>BUSINESS_DESCRIPTION</Form.Label>
                <Form.Control
                    // onChange={event => setBusinessDescription(event.target.value)} 
                    // value={businessDescription}
                    type="text"
                />
                <Form.Text className="text-muted">
                    Give us 1 or 2 sentences about your restaurant
                </Form.Text>
            </Form.Group>
            <Form.Group>
                <Form.Label>SLOGAN</Form.Label>
                <Form.Control
                    // onChange={event => setSlogan(event.target.value)}
                    // value={slogan}
                    type="text"   
                />
            </Form.Group>
        </>
    )
}

export default HomePageFormFields;