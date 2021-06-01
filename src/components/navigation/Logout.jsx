import { Auth } from 'aws-amplify';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

function Logout() {
    const dispatch = useDispatch();

    async function signOut() {
        try {
            await Auth.signOut();
            dispatch({type: "UPDATE_AUTH", auth: false});
            window.location = "/";
            
        } catch (error) {
            console.log('error signing out: ', error);
        }
    }

    return <Button onClick={() => signOut()}>Logout</Button>
}

export default Logout;