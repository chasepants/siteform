import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';

function HomePage() {
    const dispatch = useDispatch();

    return <div className="text-center">
        <Link to='/templates' onClick={() => {
            dispatch({
                type: "ADD_BREAD_CRUMB",
                breadCrumb: "template"
            })
        }}>
            <Button variant="success">
                Get Started
            </Button>
        </Link>
    </div>
}

export default HomePage;