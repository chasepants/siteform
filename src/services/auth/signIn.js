import { Auth } from 'aws-amplify';

async function logUserIn(username, password) {
    try {
        const user = await Auth.signIn(username, password);
    } catch (error) {
        return error;
    }
}

export default logUserIn;