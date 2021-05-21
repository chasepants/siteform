import { Auth } from 'aws-amplify';
import { Button, Form } from 'react-bootstrap';
import resendCode from '../../services/auth/sendConfirmation';
import addUser from '../../services/api/addUser';

function ConfirmationCard({setCode, code, username, password, firstName, lastName}) {

    async function confirmSignUp() {
        try {
            Auth.confirmSignUp(username, code).then(resp => {
                //log the user in and then add the user
                Auth.signIn(username, password).then(async resp => {
                    let userObj = {
                        firstName: firstName,
                        lastName: lastName,
                        username: username
                    }
                    await addUser(userObj);
                });
            })
        } catch (error) {
            console.log('error confirming signup')
        }
    }

    return (
        <div className="col-sm-4 offset-sm-4 form-card p-3 d-flex flex-column justify-content-between">
            <h4>Enter your confirmation code</h4>
            <Form.Group className="mt-3">
                <Form.Label>Code *</Form.Label>
                <Form.Control value={code} onChange={e => setCode(e.target.value)} type="text"/>
                <Form.Text className=" mt-3 text-muted">
                    Don't see the code in your email? <a onClick={()=>resendCode(username)} href="#">Resend</a>
                </Form.Text>
            </Form.Group>
            <Form.Group className="text-center mt-3">
                <Button onClick={() => confirmSignUp()} >Confirm</Button>
            </Form.Group>
        </div>
    )
}

export default ConfirmationCard;