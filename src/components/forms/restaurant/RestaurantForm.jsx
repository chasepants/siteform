import { useDispatch, useSelector } from 'react-redux';

import { Form } from 'react-bootstrap';
import FormButtons from '../common/FormButtons';
import ContactPageForm from './pages/ContactPageForm';
import AboutUsForm from './pages/AboutUsForm';
import HomePage from './pages/HomePageForm';

const GENERAL_FORM = 0;
const CONTACT_FORM = 1;
const ABOUT_FORM   = 2;

function RestaurantForm({bucketName, setPostData, status, templateName}) {
    const formIndex = useSelector(state => state.form.formIndex);

    const dispatch = useDispatch();

    dispatch({
        type: "ADD_SUB_HEADER",
        header: "Tell us about your restaurant"
    });

    return (
        <div className="container">
            <div className="d-flex flex-column justify-content-between h-75">
                <Form>
                    {(() => {
                        switch (formIndex) {
                            case GENERAL_FORM:
                                return <HomePage />;
                            case CONTACT_FORM:
                                return <ContactPageForm />;
                            case ABOUT_FORM:
                                return <AboutUsForm />;
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





/* {
    status === 200 &&
    <h4>You can visit your site <a href={`http://${bucketName}.s3-website-us-west-1.amazonaws.com`}>HERE</a></h4>
} */



/* <Button onClick={() => setPostData({
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
})}>Build Website</Button> */