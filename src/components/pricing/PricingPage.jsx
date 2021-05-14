import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function PricingPage() {
    const dispatch = useDispatch();

    const formComplete = useSelector(state => state.form.formComplete);

    dispatch({ 
        type: "ADD_HEADER",
        header: "Pricing"
    });
    
    const choosePricing = _pricing => {
        dispatch({ 
            type: "ADD_PRICING",
            pricing: _pricing
        });
    }

    const nextPage = formComplete ? "/domain" : "/templates"

    return <div className="container mt-5">
        <div className="row mt-5 justify-content-between">
            <div className="col-sm-3">
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title className="text-center">
                            <h3>FREE</h3>
                        </Card.Title>
                        <Card.Text>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">No Custom Domain Names</li>
                                <li class="list-group-item">1 edit a month</li>
                                <li class="list-group-item">Morbi leo risus</li>
                                <li class="list-group-item">Choose from 10 templates</li>
                                <li class="list-group-item">No Tech Support</li>
                            </ul>
                        </Card.Text>
                        <div className="text-center">
                            <Link to={nextPage}>
                                <Button onClick={() => choosePricing("free")} variant="primary">Select</Button> 
                            </Link>
                        </div>
                    </Card.Body>
                </Card>
            </div>
            <div className="col-sm-3">
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title className="text-center">
                            <h3>BASIC</h3>
                        </Card.Title>
                        <Card.Text>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">$5.99 / month</li>
                                <li class="list-group-item">Use Your Own Domain Name</li>
                                <li class="list-group-item">5 edits a month</li>
                                <li class="list-group-item">Choose from over 20 templates</li>
                                <li class="list-group-item">Tech Support</li>
                            </ul>
                        </Card.Text>
                        <div className="text-center">
                            <Link to={ nextPage }>
                                <Button onClick={() => choosePricing("basic")} variant="primary">Select</Button>
                            </Link>
                        </div>
                    </Card.Body>
                </Card>
            </div>
            <div className="col-sm-3">
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title className="text-center">
                            <h3>PREMIUM</h3>
                        </Card.Title>   
                        <Card.Text>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">$10.99 / month</li>
                                <li class="list-group-item">Use Your Own Domain Name</li>
                                <li class="list-group-item">Unlimited Edits</li>
                                <li class="list-group-item">Choose from over 20 templates</li>
                                <li class="list-group-item">Tech Support</li>
                            </ul>
                        </Card.Text>
                        <div className="text-center">
                            <Link to={ nextPage }>
                                <Button  onClick={() => choosePricing("premium")} variant="primary">Select</Button>
                            </Link>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </div>
    </div>
}

export default PricingPage;