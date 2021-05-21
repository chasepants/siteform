import SignInCard from './SignInCard';
import SignUpCard from './SignUpCard';
import ErrorBox from './ErrorBox';
import ConfirmationCard from './ConfirmationCard';
import { useState } from 'react';

function LoginPage() {
    const [code, setCode] = useState('');
    const [signUp, setSignUp] = useState(false);
    const [awaitCode, setAwaitCode] = useState(false);
    const [firstName, setFirstname] = useState('');
    const [lastName, setLastname] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const [errorHeader, setErrorHeader]   = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    if (awaitCode) {
        return (
            <ConfirmationCard 
                setCode={setCode}
                code={code}
                username={username}
                password={password}
                firstName={firstName}
                lastName={lastName} 
            />
        );
    }

    return (
        <div class="container mt-5">
            <div className="row">
                {
                    !signUp ? (
                        <SignInCard 
                            setUsername={setUsername}
                            setPassword={setPassword}
                            setErrorHeader={setErrorHeader}
                            setErrorMessage={setErrorMessage}
                            username={username}
                            password={password}
                            setSignUp={setSignUp}
                        />
                    ) : (
                        <SignUpCard 
                            firstName={firstName}
                            setFirstname={setFirstname}
                            lastName={lastName}
                            setLastname={setLastname}
                            username={username}
                            setUsername={setUsername}
                            password={password}
                            setPassword={setPassword}
                            setAwaitCode={setAwaitCode}
                            setErrorHeader={setErrorHeader}
                            setErrorMessage={setErrorMessage}
                            setSignUp={setSignUp}
                        />
                    )
                }
            </div>
            <div className="row mt-4">
                {
                    errorMessage && (
                      <ErrorBox
                        setErrorMessage={setErrorMessage}
                        errorMessage={errorMessage}
                        errorHeader={errorHeader}
                      />  
                    )
                }
            </div>
        </div>
    )
}

export default LoginPage;