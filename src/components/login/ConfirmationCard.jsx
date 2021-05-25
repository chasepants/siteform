import {useState} from 'react';
import { Auth } from 'aws-amplify';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import resendCode from '../../services/auth/sendConfirmation';
import addUser from '../../services/api/addUser';

function ConfirmationCard({setCode, code, setErrorMessage, username, password, firstName, lastName}) {
    const dispatch = useDispatch();
    const [auth, setAuth] = useState(false);

    async function confirmSignUp() {
        try {
            let confirmSignUpResponse = await Auth.confirmSignUp(username, code);
            console.log(confirmSignUpResponse);
            if (confirmSignUpResponse === "SUCCESS") {
                let cognitoUser = await Auth.signIn(username, password);
                console.log(cognitoUser);
                if (cognitoUser) {
                    let userObj = {
                        firstName: firstName,
                        lastName: lastName,
                        username: username
                    }
                    console.log("CALLING ADD USER");
                    let response = await addUser(userObj, dispatch);
                    if (response === "SUCCESS") {
                        setAuth(true);
                    }
                }
            }
        } catch (error) {
            console.log(error);
            setErrorMessage(error.message);
            return "ERROR";
        }
    }

    return auth ? <Redirect to="/account" /> : (
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
                <Button onClick={() => {
                    // let response = await confirmSignUp();
                    // console.log(response);
                    confirmSignUp();
                }}> Confirm </Button>
            </Form.Group>
        </div>
    )
}

export default ConfirmationCard;