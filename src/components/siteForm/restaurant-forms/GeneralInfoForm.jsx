import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import ImageRow from '../../images/ImageRow';
import Image from '../../../assets/imgs/restaurant-homepage.png'

function GeneralInfoForm({businessName, setBusinessName, businessDescription, setBusinessDescription, slogan, setSlogan}) {
    const [ showImages, setShowImages ] = useState(false);

    const dispatch = useDispatch();

    dispatch({
        type: "UPDATE_PROGRESS",
        progress: 20
    });

    return (         
        <div className="row">  
            <div className="col-sm-4">
                <h3>Home Page</h3>
                <small className="mb-2 text-muted form-text">Match the form names to the names on the example image on the right</small>
                    {
                        !showImages && <>
                            <Form.Group>
                                <Form.Label>BUSINESS_NAME</Form.Label>
                                <Form.Control
                                    onChange={event => setBusinessName(event.target.value)} 
                                    value={businessName} 
                                    type="text"
                                />
                                <Form.Text className="text-muted">
                                    This will be displayed as the main title
                                </Form.Text>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>BUSINESS_DESCRIPTION</Form.Label>
                                <Form.Control
                                    onChange={event => setBusinessDescription(event.target.value)} 
                                    value={businessDescription}
                                    type="text"
                                />
                                <Form.Text className="text-muted">
                                    Give us 1 or 2 sentences about your restaurant
                                </Form.Text>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>SLOGAN</Form.Label>
                                <Form.Control
                                    onChange={event => setSlogan(event.target.value)}
                                    value={slogan}
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
            </div> 
            <div className="col-sm-6 offset-sm-2 justify-content-center">
                <p></p>
                <img className="img-fluid" src={Image} />
            </div>
        </div>
    )
}

export default GeneralInfoForm;


