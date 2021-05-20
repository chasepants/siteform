import { Button } from 'react-bootstrap';

function Login() {
    return <Button onClick={() => {
        window.location = '/login'
    }}>Login</Button>
}

export default Login;