import { Form } from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

function AboutUsForm({established, setEstablished, ownersBio, setOwnersBio, setEndOfForm}) {
    const [aboutUsPageForm, setShowAboutUsPageForm] = useState(false);
    
    const dispatch = useDispatch();

    dispatch({
        type: "ADD_BREAD_CRUMB",
        breadCrumb: "About Page"
    })

    return (         
        <>   
            <Form.Group>
                <h6>Do you want an About Us page?</h6>
                <label className="radio-inline">
                    <input type="radio" name="contact-page" onClick={() => {
                        setShowAboutUsPageForm(true);
                        setEndOfForm(true);
                    }}/>
                    Yes
                </label>
                <label className="radio-inline ml-4">
                    <input type="radio" name="contact-page" onClick={() => {
                        setShowAboutUsPageForm(false);
                        setEndOfForm(true);
                    }}/> 
                    No
                </label>
            </Form.Group> 
            {
                aboutUsPageForm && 
                <>
                    <Form.Group>
                        <Form.Label>Established:</Form.Label>
                        <Form.Control
                            onChange={event => setEstablished(event.target.value)} 
                            value={established} 
                            type="text"
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>About The Owners</Form.Label>
                        <Form.Control
                            onChange={event => setOwnersBio(event.target.value)} 
                            value={ownersBio}
                            type="text"
                        />
                    </Form.Group>
                </>
            }
            
        </>
    )
}

export default AboutUsForm;


