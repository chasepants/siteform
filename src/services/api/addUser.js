import { API, graphqlOperation } from 'aws-amplify';
import { createUser } from '../../graphql/mutations';

async function addUser({firstName, lastName, username}) {
    try {
        const user = { 
            first_name: firstName,
            last_name: lastName,
            email: username,
            address: "",
            phone: ""
        }

        await API.graphql(graphqlOperation(createUser, {input: user}))
            .then(resp => console.log(resp))
            .catch(err => console.log(err));

        window.location = "/account"
    } catch (err) {
        console.log("ADD USER ERROR:")
        console.log(err);
    }
}

export default addUser;