import { API, graphqlOperation } from 'aws-amplify';
import { createUser } from '../../graphql/mutations';

async function addUser({firstName, lastName, username}, dispatch) {
    try {   
        const user = { 
            first_name: firstName,
            last_name: lastName,
            email: username
        }
        
        console.log("Attempting to add via graphql: ");
        console.log(user);

        let createUserResponse = await API.graphql(graphqlOperation(createUser, {input: user}));
        console.log(createUserResponse);
        if (createUserResponse) {
            //store the user in redux
            dispatch({
                type: "ADD_USER",
                user: {
                    first_name: user.first_name,
                    last_name: user.last_name,
                    username: user.email
                }
            })
        }     

        return "SUCCESS";
    } catch (err) {
        console.log(err);
        return "ERROR";
    }
}

export default addUser;