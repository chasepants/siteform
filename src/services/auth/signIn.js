import { Auth } from 'aws-amplify';
import getUserDetails from '../api/getUserDetails';

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

export default logUserIn;