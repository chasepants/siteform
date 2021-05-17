import { Button } from 'react-bootstrap';
import { withAuthenticator } from '@aws-amplify/ui-react';

function Login() {
    return <Button onClick={() => {
        window.location = '/account'
    }}>Login</Button>
}

export default Login;