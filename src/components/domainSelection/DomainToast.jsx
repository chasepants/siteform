//SERVICES
import {useEffect, useState} from 'react';

//COMPONENTS
import {Col, Row, Toast} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function DomainNameToast({domain, availability}) { 
    const [show, setShow] = useState(false);

    useEffect(()=>{
        if (availability === 'AVAILABLE') {
            setShow(true);
        }
    }, [availability])
    
    return (
      <Row className="mt-5">
        <Col sm={12}>
          <Toast onClose={() => setShow(false)} show={show}>
            <Toast.Header>
                {`${domain} is available!`}
            </Toast.Header>
            <Toast.Body className="text-center">
                <Link className="btn btn-primary" style={{ textDecoration: 'none', border: 'none' }} to='/templates'>
                    Continue
                </Link>
            </Toast.Body>
          </Toast>
        </Col>
      </Row>
    );
}

export default DomainNameToast;