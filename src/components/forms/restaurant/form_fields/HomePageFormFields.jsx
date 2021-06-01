import { Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

function HomePageFormFields() {
    const [name, setName] = useState('')
    const [slogan, setSlogan] = useState('');
    const [description, setDescription] = useState('');

    const dispatch = useDispatch();

    useEffect(() => {
        console.log('update');
        dispatch({
            type: "ADD_HOME_PAGE_DATA",
            homePage: {
                businessName: name,
                businessDescription: description,
                slogan: slogan
            } 
        })
    }, [name, slogan, description])

    return (
        <>
            <Form.Group>
                <Form.Label>BUSINESS_NAME</Form.Label>
                <Form.Control
                    onChange={event => setName(event.target.value)} 
                    value={name} 
                    type="text"
                />
                <Form.Text className="text-muted">
                    This will be displayed as the main title
                </Form.Text>
            </Form.Group>
            <Form.Group>
                <Form.Label>BUSINESS_DESCRIPTION</Form.Label>
                <Form.Control
                    onChange={event => setDescription(event.target.value)} 
                    value={description}
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
    )
}

export default HomePageFormFields;