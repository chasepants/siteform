import { Form } from 'react-bootstrap';
import SubHeader from '../../common/SubHeader';

import Image from '../../../assets/imgs/restaurant-homepage.png'

function GeneralInfoForm({businessName, setBusinessName, businessDescription, setBusinessDescription, hours, setHours, location, setLocation, slogan, setSlogan}) {

    return (         
        <div className="row">  
            <div className="col-sm-4">
                <p>Fill out the form for the home page of your site. An example of what the page will look like is on your right.</p>
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
            </div> 
            <div className="col-sm-6 offset-sm-2 justify-content-center">
                <p></p>
                <img className="img-fluid" src={Image} />
            </div>
        </div>
    )
}

export default GeneralInfoForm;


