import { useDispatch } from 'react-redux';
import FormCard from '../../common/FormCard';

import Image from '../../../../assets/imgs/restaurant-about-us.png'

function AboutUsForm() {

    const dispatch = useDispatch();

    dispatch({
        type: "ADD_BREAD_CRUMB",
        breadCrumb: "About Page"
    });

    dispatch({
        type: "UPDATE_PROGRESS",
        progress: 40
    });

    dispatch({
        type: "UPDATE_IS_FIRST_FORM",
        isFirstForm: false
    });

    dispatch({
        type: "UPDATE_IS_LAST_FORM",
        isLastForm: true
    });

    return (         
        <div className="row mt-3">  
            <FormCard formPageName="About Us" defaultAddPage={false} formField="restaurant-about-us-page"/>
            <div className="col-sm-6 offset-sm-2 justify-content-center d-flex align-items-center">
                <img className="img-fluid" src={Image} />
            </div>
        </div>
    )
}

export default AboutUsForm;


