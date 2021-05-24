import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Redirect } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import logUserIn from '../../services/auth/signIn';

function SignInCard({setUsername, setPassword, setErrorHeader, setErrorMessage, username, password, setSignUp}) {
    const [auth, setAuth] = useState(false);
    const dispatch = useDispatch();

    return auth ? <Redirect to="/account" /> : (
        <div className="col-sm-4 offset-sm-4 form-card p-3 d-flex flex-column justify-content-between">
            <h4>Sign in to your account</h4>
            <Form.Group className="mt-3">
                <Form.Label>Username *</Form.Label>
                <Form.Control value={username} onChange={e => setUsername(e.target.value)} type="text"/>
                <Form.Text className="text-muted">
                    This will be your email
                </Form.Text>
            </Form.Group>
            <Form.Group>
                <Form.Label >Password *</Form.Label>
                <Form.Control value={password} onChange={e => setPassword(e.target.value)} type="password"/>
                <Form.Text className="text-muted">
                    Forgot your password? <a href="#">Reset password</a>
                </Form.Text>
            </Form.Group>
            <Form.Group className="text-center mt-3">
                <Button onClick={async () => {
                    let resp = await logUserIn(username, password, setErrorMessage, dispatch);
                    console.log(resp);
                    if (resp === "SUCCESS") {
                        setAuth(true);
                    } else {
                        setErrorHeader('Hmm, looks like something went wrong');
                    }
                }} >Sign In</Button>
                <Form.Text className=" mt-3 text-muted">
                    Need an account? <a onClick={()=>setSignUp(true)} href="#">Sign Up</a>
                </Form.Text>
            </Form.Group>
        </div>
    )
}

export default SignInCard;