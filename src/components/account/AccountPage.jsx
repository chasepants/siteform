import { Accordion, Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

function AccountPage() {
    const dispatch = useDispatch();

    dispatch({ 
        type: "ADD_HEADER",
        header: "Account Details"
    });

    const user = useSelector(state => state.user);

    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-sm-8 offset-sm-2">
                    <Accordion defaultActiveKey="0">
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="" eventKey="0">
                                My Info
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <table className="table">
                                        <tbody>
                                            <tr>
                                                <th scope="row">Name:</th>
                                                <td>{user.first_name} {user.last_name}</td>
                                                <td><Button variant="link">edit</Button></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Username:</th>
                                                <td>{user.username}</td>
                                                <td><Button variant="link">edit</Button></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Password:</th>
                                                <td>*********</td>
                                                <td><Button variant="link">edit</Button></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Address:</th>
                                                <td>123 Main St. Provo, UT 84606</td>
                                                <td><Button variant="link">edit</Button></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Phone:</th>
                                                <td>(435) 253-1590</td>
                                                <td><Button variant="link">edit</Button></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="" eventKey="1">
                                Billing
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                            <th scope="col"></th>
                                            <th scope="col">Card Number</th>
                                            <th scope="col">Expr. Date</th>
                                            <th scope="col">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                            <th scope="row">My Card</th>
                                            <td>************2724</td>
                                            <td>05/24</td>
                                            <td>Active</td>
                                            </tr>
                                            <tr>
                                            <th scope="row">Other Card</th>
                                            <td>************4342</td>
                                            <td>11/22</td>
                                            <td>Inactive</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="" eventKey="2">
                                Websites
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="2">
                                <Card.Body>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Plan</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">Paramount Cubing</th>
                                                <td>Basic</td>
                                                <td>Active</td>
                                                <td><Button variant="link">edit</Button> | <Button variant="link">view</Button></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Red Rabbit</th>
                                                <td>Free</td>
                                                <td>Active</td>
                                                <td><Button variant="link">edit</Button> | <Button variant="link">view</Button></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="" eventKey="3">
                                Payment History
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="3">
                                <Card.Body>
                                
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </div>
            </div>
            <br/> <br/>
            <br/> <br/> 
        </div> 
    )
}

export default AccountPage;