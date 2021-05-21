import { Alert, Button, Form } from 'react-bootstrap';
import { useState } from 'react';
import { API, graphqlOperation, Auth } from 'aws-amplify';
import { createUser } from '../graphql/mutations';

function LoginPage() {
    const [code, setCode] = useState('');
    const [signUp, setSignUp] = useState(false);
    const [awaitCode, setAwaitCode] = useState(false);
    const [firstName, setFirstname] = useState('');
    const [lastName, setLastname] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorHeader, setErrorHeader]   = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    async function resendCode() {
        await Auth.resendSignUp(username)
        .then(data => console.log(data))
        .catch(err => console.log(err))
    }

    async function addUser() {
        try {
            const user = { 
                first_name: firstName,
                last_name: lastName,
                email: username,
                address: "",
                phone: ""
            }

            await API.graphql(graphqlOperation(createUser, {input: user}))
                .then(resp => console.log(resp))
                .catch(err => console.log(err));
                
            window.location = "/account"
        } catch (err) {
            console.log("ADD USER ERROR:")
            console.log(err);
        }
    }

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
            await Auth.signUp({
                username,
                password,
            });
            setAwaitCode(true);
        } catch (error) {
            console.log(error);
            setErrorHeader(`Hmm, that didn't seem to work`);
            setErrorMessage(error.message);
        }
    }

    async function confirmSignUp() {
        try {
            Auth.confirmSignUp(username, code).then(resp => {
                //log the user in and then add the user
                Auth.signIn(username, password).then(async resp => {
                    await addUser();
                });
            })
        }catch (error) {
            console.log('error confirming signup')
        }
    }

    if (awaitCode) {
        return (
            <div className="col-sm-4 offset-sm-4 form-card p-3 d-flex flex-column justify-content-between">
                <h4>Enter your confirmation code</h4>
                <Form.Group className="mt-3">
                    <Form.Label>Code *</Form.Label>
                    <Form.Control value={code} onChange={e => setCode(e.target.value)} type="text"/>
                    <Form.Text className=" mt-3 text-muted">
                        Don't see the code in your email? <a onClick={()=>resendCode()} href="#">Resend</a>
                    </Form.Text>
                </Form.Group>
                <Form.Group className="text-center mt-3">
                    <Button onClick={() => confirmSignUp()} >Confirm</Button>
                </Form.Group>
            </div>
        )
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
                                    Forgot your password? <a href="#">Reset password</a>
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="text-center mt-3">
                                <Button onClick={() => logUserIn()} >Sign In</Button>
                                <Form.Text className=" mt-3 text-muted">
                                    Need an account? <a onClick={()=>setSignUp(true)} href="#">Sign Up</a>
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
                                    Already have an account? <a onClick={()=>setSignUp(false)}>Sign In</a>
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