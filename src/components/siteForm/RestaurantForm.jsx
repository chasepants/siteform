import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Button, Form } from 'react-bootstrap';
import SubHeader from '../common/SubHeader';
import ContactPageForm from './restaurant-forms/ContactPageForm';
import AboutUsForm from './restaurant-forms/AboutUsForm';


function RestaurantForm({bucketName, setPostData, status, templateName}) {
    const [businessName, setBusinessName]               = useState('');
    const [businessDescription, setBusinessDescription] = useState('');
    const [hours, setHours]                             = useState('');
    const [location, setLocation]                       = useState('');
    const [slogan, setSlogan]                           = useState('');
    const [contactPageForm, setShowContactPageForm]     = useState(false);
    const [aboutUsPageForm, setShowAboutUsPageForm]     = useState(false);
    const [phone, setPhone]                             = useState('');
    const [email, setEmail]                             = useState('');
    const [established, setEstablished]                 = useState('');
    const [ownersBio, setOwnersBio]                     = useState(''); 

    const dispatch = useDispatch();

    dispatch({
        type: "ADD_SUB_HEADER",
        header: "Tell us about your restaurant"
      })

    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <SubHeader/>
            
            <Form>
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
                <Form.Group>
                    <h6>Do you want a contact page?</h6>
                    <label className="radio-inline">
                        <input type="radio" name="contact-page" onClick={() => setShowContactPageForm(true)}/>
                        Yes
                    </label>
                    <label className="radio-inline ml-4">
                        <input type="radio" name="contact-page" onClick={() => setShowContactPageForm(false)}/> 
                        No
                    </label>
                </Form.Group>
                <Form.Group>
                    {
                        contactPageForm && 
                        <ContactPageForm phone={phone} setPhone={setPhone} email={email} setEmail={setEmail} />
                    }
                </Form.Group>
                <Form.Group>
                    <h6>Do you want an About Us page?</h6>
                    <label className="radio-inline">
                        <input type="radio" name="contact-page" onClick={() => setShowAboutUsPageForm(true)}/>
                        Yes
                    </label>
                    <label className="radio-inline ml-4">
                        <input type="radio" name="contact-page" onClick={() => setShowAboutUsPageForm(false)}/> 
                        No
                    </label>
                </Form.Group>
                <Form.Group>
                    {
                        aboutUsPageForm && 
                        <AboutUsForm established={established} setEstablished={setEstablished} ownersBio={ownersBio} setOwnersBio={setOwnersBio}
                        />
                    }
                </Form.Group>
                
            </Form>

            
            <br/>
            <Button onClick={() => setPostData({
                "bucketName":           bucketName,
                "templateName":         templateName,
                "homePage": {
                    "BUSINESS_NAME":        businessName,
                    "BUSINESS_DESCRIPTION": businessDescription,
                    "SLOGAN":               slogan
                },
                "contactPage": {
                    "BUSINESS_NAME":        businessName,
                    "PHONE":               phone,
                    "EMAIL":               email,
                    "HOURS":               hours,
                    "LOCATION":            location
                },
                "aboutPage": {
                    "BUSINESS_NAME": businessName,
                    "BIO":           ownersBio,
                    'ESTABLISHED':   established
                }
            })}>Build Website</Button>
      
            <br/>
            {
                status === 200 &&
                <h4>You can visit your site <a href={`http://${bucketName}.s3-website-us-west-1.amazonaws.com`}>HERE</a></h4>
            }
        </div>
    )
}

export default RestaurantForm;


