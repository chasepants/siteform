import { Accordion, Button, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { withAuthenticator } from '@aws-amplify/ui-react'
import SiteOne from '../../assets/imgs/restaurant.png';

function MySites() {
    const dispatch = useDispatch();

    dispatch({ 
        type: "ADD_HEADER",
        header: "My Sites"
    });

    return <div className="container">
        <div className="row mt-5">
            <div className="col-sm-8 offset-sm-2 form-card d-flex justify-content-between site-col">
                <h4>Paramount Cubing</h4>
                <img src={SiteOne} alt="" className="img-fluid"/>
            </div>
        </div>
        <br/> <br/>
        <br/> <br/> 
    </div>
}

export default withAuthenticator(MySites);