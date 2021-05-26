import { Auth, API, graphqlOperation } from 'aws-amplify';
import { createSite } from '../../graphql/mutations';
import { listSites } from '../../graphql/queries';
import faker from 'faker';

async function getUserSites() {

    let sites = await API.graphql(graphqlOperation(listSites))
    
    return sites.data.listSites.items;
}

async function addSite(userId) {
    console.log(userId)
    try {   
        if (!userId) {
            //getUserByEmail, email will be in Auth.currentSession??
        }
        const site = { 
            userID: userId,
            domain: faker.internet.url(),
            bucket: "aws::s3"
        }
        
        console.log("Attempting to add via graphql: ");
        console.log(site);

        let createSiteResponse = await API.graphql(graphqlOperation(createSite, {input: site}));
        console.log(createSiteResponse);

        return "SUCCESS";
    } catch (err) {
        console.log(err);
        return "ERROR";
    }
}



export {
    getUserSites,
    addSite
}