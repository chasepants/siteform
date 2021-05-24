import { API, graphqlOperation } from 'aws-amplify';
import { getUserByEmail } from '../../graphql/queries';

async function getUserDetails(username, dispatch) {
    console.log("getting user details for " + username);
    try {
        let getUserResponse = await API.graphql(graphqlOperation(getUserByEmail, {email: username}));
        dispatch({
            type: "ADD_USER",
            user: {
                first_name: getUserResponse.data.getUserByEmail.items[0].first_name,
                last_name: getUserResponse.data.getUserByEmail.items[0].last_name,
                username: getUserResponse.data.getUserByEmail.items[0].email,
                address: "N/A",
                phone: "N/A"
            }
        })
        return "SUCCESS";
    } catch (err) {
        console.log(err);
        return "ERROR";
    }
}

export default getUserDetails;