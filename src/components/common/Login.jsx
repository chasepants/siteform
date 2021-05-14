import { Button } from 'react-bootstrap';

function Login() {
    return <Button onClick={() => window.location = '/account'}>Login</Button>
}

export default Login;