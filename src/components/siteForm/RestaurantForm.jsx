import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Form } from 'react-bootstrap';
import FormButtons from './common/FormButtons';
import ContactPageForm from './restaurant-forms/ContactPageForm';
import AboutUsForm from './restaurant-forms/AboutUsForm';
import GeneralInfoForm from './restaurant-forms/GeneralInfoForm';

const GENERAL_FORM = 0;
const CONTACT_FORM = 1;
const ABOUT_FORM   = 2;

function RestaurantForm({bucketName, setPostData, status, templateName}) {
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

    const formIndex = useSelector(state => state.form.formIndex);

    const dispatch = useDispatch();

    dispatch({
        type: "ADD_SUB_HEADER",
        header: "Tell us about your restaurant"
    })

    return (
        <div className="container-fluid h-100 mt-3">
            <div className="d-flex flex-column justify-content-between h-75">
                <Form>
                    {(() => {
                        switch (formIndex) {
                            case GENERAL_FORM:
                                console.log('returning general form....')
                                return <GeneralInfoForm 
                                            businessName={businessName} 
                                            setBusinessName={setBusinessName} 
                                            businessDescription={businessDescription}
                                            setBusinessDescription={setBusinessDescription} 
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
                                            hours={hours} 
                                            setHours={setHours}
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
                <FormButtons/>
            </div>
        </div>
    )
}

export default RestaurantForm;





 {/* {
                    status === 200 &&
                    <h4>You can visit your site <a href={`http://${bucketName}.s3-website-us-west-1.amazonaws.com`}>HERE</a></h4>
                } */}



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