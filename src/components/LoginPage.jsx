import { Alert, Button, Form } from 'react-bootstrap';
import { useState } from 'react';
import { Auth } from 'aws-amplify';

function LoginPage() {

    const [signUp, setSignUp]     = useState(false);
    const [firstName, setFirstname] = useState('');
    const [lastName, setLastname] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorHeader, setErrorHeader]   = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    async function logUserIn() {
        try {
            const user = await Auth.signIn(username, password);
            if (user) {
                window.location = "/";
            }
        } catch (error) {
            console.log(error);
            setErrorHeader(`Hmm, that didn't seem to work`);
            setErrorMessage(error.message);
        }
    }

    async function signUserUp() {
        try {
            const { user } = await Auth.signUp({
                username,
                password,
            });

            if (user) {
                window.location = "/";
            }
        } catch (error) {
            console.log(error);
            setErrorHeader(`Hmm, that didn't seem to work`);
            setErrorMessage(error.message);
        }
    }

    return (
        <div class="container mt-5">
            <div className="row">
                {
                    !signUp ? (
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
                                    Forgot your password? <a href="/">Reset password</a>
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="text-center mt-3">
                                <Button onClick={() => logUserIn()} >Sign In</Button>
                                <Form.Text className=" mt-3 text-muted">
                                    Need an account? <a onClick={()=>setSignUp(true)} href="/">Sign Up</a>
                                </Form.Text>
                            </Form.Group>
                        </div>
                    ) : (
                        <div className="col-sm-4 offset-sm-4 form-card p-3 d-flex flex-column justify-content-between">
                            <h4>Sign up for an account</h4>
                            <Form.Group className="mt-3">
                                <Form.Label>Firstname *</Form.Label>
                                <Form.Control value={firstName} onChange={e => setFirstname(e.target.value)} type="text"/>
                            </Form.Group>
                            <Form.Group className="mt-3">
                                <Form.Label>Lastname *</Form.Label>
                                <Form.Control value={lastName} onChange={e => setLastname(e.target.value)} type="text"/>
                            </Form.Group>
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
                            </Form.Group>
                            <Form.Group className="text-center mt-3">
                                <Button onClick={() => signUserUp()} >Sign Up</Button>
                                <Form.Text className=" mt-3 text-muted">
                                    Already have an account? <a onClick={()=>setSignUp(false)} href="/">Sign In</a>
                                </Form.Text>
                            </Form.Group>
                        </div>      
                    )
                }
            </div>
            <div className="row mt-4">
                {
                    errorMessage && (
                        <div className="col-sm-6 offset-sm-3">
                            <Alert variant="danger" onClose={() => setErrorMessage('')} dismissible>
                               <Alert.Heading>{ errorHeader }</Alert.Heading>
                               <p>
                                { errorMessage }
                               </p> 
                            </Alert>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default LoginPage;