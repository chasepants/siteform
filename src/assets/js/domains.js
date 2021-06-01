import { Button } from 'react-bootstrap';

const getSuggestedResults = (domain) => {
    return (
        <div className="container">
            <div className="row">
                <div className="d-flex justify-content-between w-100">
                    <h3>{domain + "a"}</h3>
                    <Button>Proceed</Button>
                </div>
            </div>
            <div className="row mt-2">
                <div className="d-flex justify-content-between w-100">
                    <h3>{domain + "b"}</h3>
                    <Button>Proceed</Button>
                </div>
            </div>
            <div className="row mt-2">
                <div className="d-flex justify-content-between w-100">
                    <h3>{domain + "c"}</h3>
                    <Button>Proceed</Button>
                </div>
            </div>
        </div>
    )
} 

export default getSuggestedResults;