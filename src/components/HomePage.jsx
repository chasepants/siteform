import { Button, Form, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import TemplateImage from '../assets/imgs/templates.png';
import FormImage from '../assets/imgs/form.png';
import Images from '../assets/imgs/images.png';
import Pricing from '../assets/imgs/pricing.png';


function HomePage() {
    const dispatch = useDispatch();

    dispatch({ 
        type: "ADD_HEADER",
        header: "Create Your Site Today"
      });

    return (
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-sm-6 offset-sm-3 justify-content-center">
                    <ol>
                        <li>Choose a template that matches your business</li>
                        <img className="img-fluid mt-3" src={TemplateImage} />
                        <li className="mt-3">Fill out a few forms to tell us what to put on each page</li>
                        <img className="img-fluid mt-3" src={FormImage} />
                        <li className="mt-3">In each form you can up load an image or choose from our image gallery</li>
                        <img className="img-fluid mt-3" src={Images} />
                        <li className="mt-3">Then choose a plan that suits your site</li>
                        <img className="img-fluid mt-3" src={Pricing} />
                        <li>If you chose a paid plan you can either transfer in a custom domain or buy a new domain from our site</li>
                    </ol>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-sm-6 offset-sm-3">
                    <div className="text-center">
                        <Link to='/templates' onClick={() => {
                            dispatch({
                                type: "ADD_BREAD_CRUMB",
                                breadCrumb: "template"
                            })
                        }}>
                            <Button variant="success">
                                Get Started
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
            <br/>
            <br/><br/>
            <br/>
        </div>
    )
}

export default HomePage;