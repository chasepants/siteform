//form field imports
import HomePageFormFields from '../../components/forms/restaurant/form_fields/HomePageFormFields';
import AboutUsFormFields from '../../components/forms/restaurant/form_fields/AboutUsFormFields';
import ContactFormFields from '../../components/forms/restaurant/form_fields/ContactPageFormFields';

function getFormFields(form) {
    
    switch (form) {
        case "restaurant-home-page":
            return <HomePageFormFields />;
        case "restaurant-about-us-page":
            return <AboutUsFormFields />;
        case "restaurant-contact-page":
            return <ContactFormFields />;
        default: 
            return <></>;
    }

    
}

export default getFormFields;