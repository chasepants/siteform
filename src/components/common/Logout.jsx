import { Auth } from 'aws-amplify';
import { Button } from 'react-bootstrap';

function Logout() {
    async function signOut() {
        console.log('trying')
        try {
            await Auth.signOut();
            window.location = "/";
        } catch (error) {
            console.log('error signing out: ', error);
        }
    }

    return <Button onClick={() => signOut()}>Logout</Button>
}

export default Logout;