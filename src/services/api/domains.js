import axios from 'axios';
const { REACT_APP_MY_ENV } = process.env;

const checkDomainNameAvailability = async search => {
    let result = null;

    if (REACT_APP_MY_ENV !== 'development') {
        result = await axios(
            `https://j7thv6xq6e.execute-api.us-west-1.amazonaws.com/prod/MyServerlessWebsite?domain=${search}`
        );

        return result;

    } else {
        return {
            data: {
                Availability: 'AVAILABLE'
            }
        };
    }
} 

export default checkDomainNameAvailability;