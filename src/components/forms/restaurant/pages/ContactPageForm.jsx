import { useDispatch } from 'react-redux';
import FormCard from '../../common/FormCard';
import Image from '../../../../assets/imgs/restaurant-contact.png'

function ContactPageForm() {

    const dispatch = useDispatch();

    dispatch({
        type: "ADD_BREAD_CRUMB",
        breadCrumb: "Contact Page"
    });

    dispatch({
        type: "UPDATE_PROGRESS",
        progress: 30
    });

    dispatch({
        type: "UPDATE_IS_FIRST_FORM",
        isFirstForm: false
    })

    dispatch({
        type: "UPDATE_IS_LAST_FORM",
        isLastForm: false
    })

    return (   
        <div className="row mt-3">  
            <FormCard formPageName="Contact" defaultAddPage={false} formField="restaurant-contact-page"/>
            <div className="col-sm-6 offset-sm-2 justify-content-center d-flex align-items-center">
                <img alt="template" className="img-fluid" src={Image} />
            </div>
        </div> 
    )
}

export default ContactPageForm;


