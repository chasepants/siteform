import { Auth } from 'aws-amplify';

async function logUserIn(username, password) {
    try {
        const user = await Auth.signIn(username, password);
        if (user) {
            window.location = "/";
        }
    } catch (error) {
        return error;
    }
}

export default logUserIn;