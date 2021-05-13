import { Button, Form } from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import ImageRow from '../../images/ImageRow';

import Image from '../../../assets/imgs/restaurant-about-us.png'

function AboutUsForm({established, setEstablished, ownersBio, setOwnersBio}) {
    const [aboutUsPageForm, setShowAboutUsPageForm] = useState(false);
    const [ showImages, setShowImages ] = useState(false);

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
        <div className="row">  
            <div className="col-sm-4">
                {
                    aboutUsPageForm && 
                    <>
                        <h3>About Us Page</h3>
                        <small className="mb-2 text-muted form-text">Match the form names to the names on the example image on the right</small>
                        {
                            !showImages && <>
                                <Form.Group>
                                    <Form.Label>ESTABLISHED:</Form.Label>
                                    <Form.Control
                                        onChange={event => setEstablished(event.target.value)} 
                                        value={established} 
                                        type="text"
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>BIO:</Form.Label>
                                    <Form.Control
                                        onChange={event => setOwnersBio(event.target.value)} 
                                        value={ownersBio}
                                        type="text"
                                    />
                                </Form.Group>
                            </>
                        }
                        {
                            showImages && <>
                                <ImageRow/>
                            </>
                        }
                        <Button variant="warning" onClick={() => setShowImages(!showImages)}>
                            {
                                (()=>{
                                    if (!showImages) {
                                        return "Add Images";
                                    } else {
                                        return "Show Form";
                                    }
                                })()
                            }
                        </Button>
                    </>
                }
                <Form.Group>
                    <h6>Do you want an About Us page?</h6>
                    <label className="radio-inline">
                        <input type="radio" name="contact-page" onClick={() => {
                            setShowAboutUsPageForm(true);
                        }}/>
                        Yes
                    </label>
                    <label className="radio-inline ml-4">
                        <input type="radio" name="contact-page" onClick={() => {
                            setShowAboutUsPageForm(false);
                        }}/> 
                        No
                    </label>
                </Form.Group> 
            </div> 
            <div className="col-sm-6 offset-sm-2 justify-content-center">
                <img className="img-fluid" src={Image} />
            </div>
        </div>
    )
}

export default AboutUsForm;


