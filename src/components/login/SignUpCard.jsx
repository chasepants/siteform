import { Auth } from 'aws-amplify';
import { Button, Form } from 'react-bootstrap';

function SignUpCard({firstName, setFirstname, lastName, setLastname, username, setUsername, password, setPassword, setSignUp, setAwaitCode, setErrorHeader, setErrorMessage}) {
    
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

    return (
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
                    Already have an account? <a href='#' onClick={()=>setSignUp(false)}>Sign In</a>
                </Form.Text>
            </Form.Group>
        </div>  
    )
}

export default SignUpCard;