import { Auth } from 'aws-amplify';
import getUserDetails from '../api/getUserDetails';

async function logUserIn(username, password, setErrorMessage, dispatch) {
    try {
        const user = await Auth.signIn(username, password);
        if (user) {
            let response = await getUserDetails(username, dispatch);
            return "SUCCESS";
        }
    } catch (error) {
        setErrorMessage(error.message)
        return "ERROR";
    }
}

export default logUserIn;