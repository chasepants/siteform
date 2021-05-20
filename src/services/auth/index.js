import { Auth } from 'aws-amplify';

async function isAuth() {
    await Auth.currentSession()
        .then(user => {
            return user;
        }).catch(err =>{
            return err;
        });
}

export default isAuth;