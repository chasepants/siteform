import { Auth } from 'aws-amplify';

async function resendCode(username) {
    await Auth.resendSignUp(username)
    .then(data => console.log(data))
    .catch(err => console.log(err))
}

export default resendCode;