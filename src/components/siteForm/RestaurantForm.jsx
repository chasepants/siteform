import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Button, Form } from 'react-bootstrap';
import SubHeader from '../common/SubHeader';
import ContactPageForm from './restaurant-forms/ContactPageForm';
import AboutUsForm from './restaurant-forms/AboutUsForm';
import GeneralInfoForm from './restaurant-forms/GeneralInfoForm';

const GENERAL_FORM = 0;
const CONTACT_FORM = 1;
const ABOUT_FORM   = 2;

function RestaurantForm({bucketName, setPostData, status, templateName}) {
    const [currentFormIndex, setCurrentFormIndex]       = useState(0);
    //General Info Form Fields
    const [businessName, setBusinessName]               = useState('');
    const [businessDescription, setBusinessDescription] = useState('');
    const [hours, setHours]                             = useState('');
    const [location, setLocation]                       = useState('');
    const [slogan, setSlogan]                           = useState('');
    //Contact Form Fields
    const [phone, setPhone]                             = useState('');
    const [email, setEmail]                             = useState('');
    //About Form Fields
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
                {(() => {
                    let form = null;
                    switch (currentFormIndex) {
                        case GENERAL_FORM:
                            console.log('returning general form....')
                            return <GeneralInfoForm 
                                        businessName={businessName} 
                                        setBusinessName={setBusinessName} 
                                        businessDescription={businessDescription}
                                        setBusinessDescription={setBusinessDescription}
                                        hours={hours} 
                                        setHours={setHours} 
                                        location={location}
                                        setLocation={setLocation}
                                        slogan={slogan}
                                        setSlogan={setSlogan}
                                    />;
                        case CONTACT_FORM:
                            console.log('returning contact form....')
                            return <ContactPageForm 
                                        phone={phone}
                                        setPhone={setPhone}
                                        email={email}
                                        setEmail={setEmail}
                                    />;
                        case ABOUT_FORM:
                            console.log('returning about form....')
                            return <AboutUsForm 
                                        established={established}
                                        setEstablished={setEstablished}
                                        ownersBio={ownersBio}
                                        setOwnersBio={setOwnersBio}
                                    />;
                        default:
                            break;
                    }
                })()}                
                
            </Form> 
            
            <br/>
            
            {(() => {
                if (currentFormIndex < 2) {
                    return <Button onClick={() => setCurrentFormIndex(currentFormIndex+1)}>
                                Continue
                           </Button>;
                }
            })()}
            
            {(() => {
                if (currentFormIndex > 0) {
                    return <>
                            <br/>
                            <Button color='red' onClick={() => setCurrentFormIndex(currentFormIndex-1)}>
                              Back
                            </Button>
                           </>;
                }
            })()}
            <br/>
            {
                status === 200 &&
                <h4>You can visit your site <a href={`http://${bucketName}.s3-website-us-west-1.amazonaws.com`}>HERE</a></h4>
            }
        </div>
    )
}

export default RestaurantForm;


{/* <Button onClick={() => setPostData({
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
})}>Build Website</Button> */}