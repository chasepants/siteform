import { Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

function ContactPageFormFields() {
    const [hours, setHours] = useState('')
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const dispatch = useDispatch();

    useEffect(() => {
        console.log('update');
        dispatch({
            type: "ADD_CONTACT_PAGE_DATA",
            contactPage: {
                hours: hours,
                phone: phone,
                email: email
            } 
        })
    }, [hours, phone, email])

    return (
        <>
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
    )
}

export default ContactPageFormFields;