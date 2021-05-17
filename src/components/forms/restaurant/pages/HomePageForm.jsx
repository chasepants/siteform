import { useDispatch } from 'react-redux';
import Image from '../../../../assets/imgs/restaurant-homepage.png';

import FormCard from '../../common/FormCard';

function HomePageForm() {

    const dispatch = useDispatch();

    dispatch({
        type: "UPDATE_PROGRESS",
        progress: 20
    });

    return (         
        <div className="row mt-3">  
            <FormCard formPageName="Home" defaultAddPage={true} formField="restaurant-home-page"/>
            <div className="col-sm-6 offset-sm-2 justify-content-center d-flex align-items-center">
                <img className="img-fluid" src={Image} />
            </div>
        </div>
    )
}

export default HomePageForm;


