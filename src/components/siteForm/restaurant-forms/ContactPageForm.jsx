import { Button, Form } from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import ImageRow from '../../images/ImageRow';

import Image from '../../../assets/imgs/restaurant-contact.png'

function ContactPageForm({phone, setPhone, email, setEmail, hours, setHours}) {
    const [contactPageForm, setShowContactPageForm] = useState(false);
    const [ showImages, setShowImages ] = useState(false);

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
        <div className="row">  
            <div className="col-sm-4 form-card p-3">
                {
                    contactPageForm && 
                    <>
                        <h3>Contact Page</h3>
                        <small className="mb-2 text-muted form-text">Match the form names to the names on the example image on the right</small>
                        {
                            !showImages && <>
                                <Form.Group>
                                    <Form.Label>HOURS</Form.Label>
                                    <Form.Control
                                        onChange={event => setHours(event.target.value)}
                                        value={hours}
                                        type="text"    
                                    />
                                </Form.Group>       
                                <Form.Group>
                                    <Form.Label>PHONE:</Form.Label>
                                    <Form.Control
                                            onChange={event => setPhone(event.target.value)} 
                                            value={phone} 
                                            type="text"
                                        />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>EMAIL</Form.Label>
                                    <Form.Control
                                        onChange={event => setEmail(event.target.value)} 
                                        value={email}
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
                    <h6>Do you want a contact page?</h6>
                    <label className="radio-inline">
                        <input type="radio" name="contact-page" onClick={() => setShowContactPageForm(true)}/>
                        Yes
                    </label>
                    <label className="radio-inline ml-4">
                        <input type="radio" name="contact-page" onClick={() => setShowContactPageForm(false)}/> 
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

export default ContactPageForm;


