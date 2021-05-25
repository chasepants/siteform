import { API, graphqlOperation } from 'aws-amplify';
import { getUserByEmail } from '../../graphql/queries';

async function getUserDetails(username) {
    console.log("getting user details for " + username);
    try {
        let getUserResponse = await API.graphql(graphqlOperation(getUserByEmail, {email: username}));
        console.log(getUserResponse);
        
        return getUserResponse;
    } catch (err) {
        console.log(err);
        return "ERROR";
    }
}

export default getUserDetails;