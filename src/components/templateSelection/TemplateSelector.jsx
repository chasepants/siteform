import {useEffect} from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function TemplateSelector() {
  const { REACT_APP_MY_ENV } = process.env;

  const bucketName   = useSelector(state => state.bucket);
  const progress     = useSelector(state => state.progress);
  const dispatch     = useDispatch();

  dispatch({ 
    type: "ADD_HEADER",
    header: "Choose A Template"
  });

  const setTemplate = template => {
    dispatch({
      type: "ADD_TEMPLATE",
      templateName: template
    });
  }

  useEffect(async ()=>{
    if (REACT_APP_MY_ENV !== 'development') {
      console.log('creating bucket....')
      const createBucketResult = await axios.get(
        'https://prt08pyot2.execute-api.us-west-1.amazonaws.com/prod/createBucket?bucketName='+bucketName
      );
    } else {
      console.log('skipping bucket creation')
    }
  })

  return (
    <>
      <div className="container text-center mb-5">
        <div className="row mt-5 mb-5">
          <div className="col-sm-4 ">
            <Card className="form-card" style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Simplistic</Card.Title>
                <Card.Subtitle>For Restaurants</Card.Subtitle>
                <Card.Text className="mt-3">
                  <div className="card-background"/>
                </Card.Text>
                  <Link onClick={()=>{
                    setTemplate(1)
                  }} to='/site-form'>
                    <Button variant="primary">
                      Select
                    </Button>
                  </Link>
                  <Button className="ml-5" variant="success">
                    Preview
                  </Button> 
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm-4">
            <Card className="form-card" style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Lorem</Card.Title>
                <Card.Subtitle>For Personal Sites</Card.Subtitle>
                <Card.Text className="mt-3"> 
                  <div className="card-background"/>
                </Card.Text>
                  <Link onClick={()=>{
                    setTemplate(2)
                  }} to='/site-form'>
                    <Button variant="primary">
                        Select
                    </Button>
                    <Button className="ml-5" variant="success">
                      Preview
                    </Button> 
                  </Link> 
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm-4">
            <Card className="form-card" style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Easy</Card.Title>
                <Card.Subtitle>For Services</Card.Subtitle>
                <Card.Text className="mt-3">
                  <div className="card-background"/>
                </Card.Text>
                  <Link onClick={()=>{
                    setTemplate(2)
                  }} to='/site-form'>
                    <Button variant="primary">
                        Select
                    </Button>
                    <Button className="ml-5" variant="success">
                      Preview
                    </Button> 
                  </Link> 
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-sm-4">
          <Card className="form-card" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Mortar</Card.Title>
              <Card.Subtitle>For Retail Stores</Card.Subtitle>
              <Card.Text className="mt-3">
                <div className="card-background"/>
              </Card.Text>
                <Link onClick={()=>{
                  setTemplate(1)
                }} to='/site-form'>
                  <Button variant="primary">
                    Select
                  </Button>
                </Link>
                <Button className="ml-5" variant="success">
                  Preview
                </Button> 
            </Card.Body>
          </Card>
          </div>
          <div className="col-sm-4">
            <Card className="form-card" style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Grub</Card.Title>
                <Card.Subtitle>For Restaurants</Card.Subtitle>
                <Card.Text className="mt-3"> 
                  <div className="card-background"/>
                </Card.Text>
                  <Link onClick={()=>{
                    setTemplate(2)
                  }} to='/site-form'>
                    <Button variant="primary">
                        Select
                    </Button>
                    <Button className="ml-5" variant="success">
                      Preview
                    </Button> 
                  </Link> 
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm-4">
            <Card className="form-card" style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Flat</Card.Title>
                <Card.Subtitle>For Services</Card.Subtitle>
                <Card.Text className="mt-3">
                  <div className="card-background"/>
                </Card.Text>
                  <Link onClick={()=>{
                    setTemplate(2)
                  }} to='/site-form'>
                    <Button variant="primary">
                        Select
                    </Button>
                    <Button className="ml-5" variant="success">
                      Preview
                    </Button> 
                  </Link> 
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <br/> <br/>
      <br/> <br/>    
    </>
  );
}

export default TemplateSelector;
