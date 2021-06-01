import { Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

function AboutUsFormFields() {
    const [established, setEstablished] = useState('')
    const [bio, setBio] = useState('');

    const dispatch = useDispatch();

    useEffect(() => {
        console.log('update');
        dispatch({
            type: "ADD_ABOUT_PAGE_DATA",
            aboutPage: {
                established: established,
                bio: bio,
            } 
        })
    }, [established, bio])

    return (
        <>
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
                    onChange={event => setBio(event.target.value)} 
                    value={bio}
                    type="text"
                />
            </Form.Group>
        </>
    );
}

export default AboutUsFormFields;