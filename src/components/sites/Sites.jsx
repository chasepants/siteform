import { Auth } from 'aws-amplify';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { addSite, getUserSites } from '../../services/api/sites';
import { getUserDetails } from '../../services/api/users';


function Sites() {
    const dispatch = useDispatch();
    const [sites, setSites] = useState([]);
    const userId = useSelector(state => state.user.id);
    
    dispatch({ 
        type: "ADD_HEADER",
        header: "My Sites"
    });

    async function getSites() {
        const sites = await getUserSites();
        setSites(sites);
    };

    async function createSite() {
        if (!userId) {
            //getUserByEmail, email will be in Auth.currentSession??
            let user = await Auth.currentAuthenticatedUser();
            console.log(user.attributes.email);
            let resp = await getUserDetails(user.attributes.email);
            console.log(resp);
            dispatch({
                type: "ADD_USER",
                user: {
                    first_name: resp.data.getUserByEmail.items[0].first_name,
                    last_name: resp.data.getUserByEmail.items[0].last_name,
                    username: resp.data.getUserByEmail.items[0].email,
                    id: resp.data.getUserByEmail.items[0].id
                }
            })
            addSite(resp.data.getUserByEmail.items[0].id);
        } else {
            addSite(userId);
        }
    }

    useEffect(() => {
        getSites();
    }, []);

    return <div className="container">
        {
            sites.map(site => {
                return (
                    <div className="row mt-5">
                        <div className="col-sm-8 offset-sm-2 form-card d-flex justify-content-between align-items-center site-col">
                            <h4>{site.domain}</h4>
                            <div>
                                <button>Edit</button>
                                <button>View</button>
                            </div>
                        </div>
                    </div>
                )
            })
        }
        <div className="row mt-5">
            <div className="col-sm-8 offset-sm-2 d-flex justify-content-between align-items-center site-col">
                <Button onClick={() => createSite()}>Add Site</Button>
            </div>
        </div>
    </div>
}

export default Sites;