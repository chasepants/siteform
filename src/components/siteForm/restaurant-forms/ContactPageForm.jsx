import { Form } from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch } from 'react-redux';


function ContactPageForm({phone, setPhone, email, setEmail}) {
    const [contactPageForm, setShowContactPageForm] = useState(false);

    const dispatch = useDispatch();

    dispatch({
        type: "ADD_BREAD_CRUMB",
        breadCrumb: "Contact Page"
    })

    return (         
        <>   
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
            {
                contactPageForm && 
                <>
                    <Form.Group>
                        <Form.Label>Phone #:</Form.Label>
                        <Form.Control
                                onChange={event => setPhone(event.target.value)} 
                                value={phone} 
                                type="text"
                            />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            onChange={event => setEmail(event.target.value)} 
                            value={email}
                            type="text"
                        />
                    </Form.Group>
                </>
                
            }
            
        </>
    )
}

export default ContactPageForm;


