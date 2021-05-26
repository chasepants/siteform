import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { addSite, getUserSites } from '../../services/api/sites';

function MySites() {
    const dispatch = useDispatch();
    const [mySites, setMySites] = useState([]);
    const userId = useSelector(state => state.user.id);
    console.log(userId);
    
    dispatch({ 
        type: "ADD_HEADER",
        header: "My Sites"
    });

    async function getSites() {
        const sites = await getUserSites();
        setMySites(sites);
    };

    async function createSite() {
        addSite(userId);
    }

    useEffect(() => {
        getSites();
    }, []);

    return <div className="container">
        {
            mySites.map(site => {
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

export default MySites;