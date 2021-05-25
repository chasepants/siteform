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
    
    const [errorMessage, setErrorMessage] = useState('');

    if (awaitCode) {
        return (
            <>
                <ConfirmationCard 
                    setCode={setCode}
                    code={code}
                    setErrorMessage={setErrorMessage}
                    username={username}
                    password={password}
                    firstName={firstName}
                    lastName={lastName} 
                />
                <div className="row mt-4">
                    {
                        errorMessage && (
                        <ErrorBox
                            setErrorMessage={setErrorMessage}
                            errorMessage={errorMessage}
                        />  
                        )
                    }
                </div>
            </>
        );
    }

    return (
        <div className="container mt-5">
            <div className="row">
                {
                    !signUp ? (
                        <SignInCard 
                            setUsername={setUsername}
                            setPassword={setPassword}
                            setErrorMessage={setErrorMessage}
                            username={username}
                            password={password}
                            setSignUp={setSignUp}
                            setAwaitCode={setAwaitCode}
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
                      />  
                    )
                }
            </div>
        </div>
    )
}

export default LoginPage;