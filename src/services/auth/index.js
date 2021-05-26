import { Auth } from 'aws-amplify';
import {getUserDetails} from '../api/users';

async function resendCode(username) {
    await Auth.resendSignUp(username)
    .then(data => console.log(data))
    .catch(err => console.log(err))
}

async function logUserIn(username, password, setErrorMessage, setAwaitCode) {
    try {
        const user = await Auth.signIn(username, password);
        if (user) {
            let userObj = await getUserDetails(username);
            return userObj;
        }
    } catch (error) {
        if (error.message === "User is not confirmed."){
            setAwaitCode(true);
        } else {
            setErrorMessage(error.message)
        }
        return "ERROR";
    }
}

export {
    resendCode,
    logUserIn
};