import React from 'react';
import { Redirect } from 'react-router-dom';
import { Auth } from 'aws-amplify'

const RequireAuth = (Component) => { 
    return class Wrapper extends React.Component {
        state = {
            isAuthenticated: false,
            isLoading: true
        }

        async componentDidMount() {
            await Auth.currentSession()
            .then(data => {
                console.log(data);
                this.setState({ isAuthenticated: true, isLoading: false });
            }).catch(err =>{
                console.log(err);
                this.setState({ isAuthenticated: false, isLoading: false });
            });
        }
        
        render() {
            const {isLoading, isAuthenticated} = this.state;
            if (isLoading) {
                return <div>Loading</div>
            }
            if (!isAuthenticated) {
                return <Redirect to="/" />
            }
            return <Component/> 
        }
    };
} 

export default RequireAuth;