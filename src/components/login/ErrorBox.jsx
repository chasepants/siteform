import { Alert } from 'react-bootstrap';

function ErrorBox({setErrorMessage, errorMessage, errorHeader}) {
    return (
        <div className="col-sm-6 offset-sm-3">
            <Alert variant="danger" onClose={() => setErrorMessage('')} dismissible>
                <Alert.Heading>{ errorHeader }</Alert.Heading>
                <p>
                { errorMessage }
                </p> 
            </Alert>
        </div>
    )
}

export default ErrorBox;