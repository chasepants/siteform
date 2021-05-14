import { Button, Card } from 'react-bootstrap';

import { useDispatch } from 'react-redux';

function PricingPage() {
    const dispatch = useDispatch();

    dispatch({ 
        type: "ADD_HEADER",
        header: "Pricing"
    });
    

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
                            <Button variant="primary">Go somewhere</Button>
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
                            <Button variant="primary">Go somewhere</Button>
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
                            <Button variant="primary">Go somewhere</Button>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </div>
    </div>
}

export default PricingPage;