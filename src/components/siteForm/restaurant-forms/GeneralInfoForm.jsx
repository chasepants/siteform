import { Form } from 'react-bootstrap';

function GeneralInfoForm({businessName, setBusinessName, businessDescription, setBusinessDescription, hours, setHours, location, setLocation, slogan, setSlogan}) {

    return (         
        <>   
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                    onChange={event => setBusinessName(event.target.value)} 
                    value={businessName} 
                    type="text"
                />
                <Form.Text className="text-muted">
                    This will be displayed as the main title
                </Form.Text>
            </Form.Group>
            <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control
                    onChange={event => setBusinessDescription(event.target.value)} 
                    value={businessDescription}
                    type="text"
                />
                <Form.Text className="text-muted">
                    Give us 1 or 2 sentences about your restaurant
                </Form.Text>
            </Form.Group>
            <Form.Group>
                <Form.Label>Hours</Form.Label>
                <Form.Control
                    onChange={event => setHours(event.target.value)}
                    value={hours}
                    type="text"    
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Location</Form.Label>
                <Form.Control
                    onChange={event => setLocation(event.target.value)}
                    value={location}
                    type="text"   
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Slogan</Form.Label>
                <Form.Control
                    onChange={event => setSlogan(event.target.value)}
                    value={slogan}
                    type="text"   
                />
            </Form.Group>
        </>
    )
}

export default GeneralInfoForm;


