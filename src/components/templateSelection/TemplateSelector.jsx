import {useEffect} from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Card, ProgressBar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SubHeader from '../common/SubHeader';

function TemplateSelector() {
  const { REACT_APP_MY_ENV } = process.env;
  const bucketName   = useSelector(state => state.bucket);
  const dispatch     = useDispatch();

  dispatch({
    type: "ADD_SUB_HEADER",
    header: "Next select the template that best suites your business"
  })

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
      <ProgressBar now={66}/>
      <div className="container text-center">
          <SubHeader/>
            <div className="row">
              <div className="col-sm-4 offset-sm-2">
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>Restaurant Website</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
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
                <Card style={{ width: '18rem' }}>
                  <Card.Body>
                    <Card.Title>About Me Site</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      .
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
    </>
  );
}

export default TemplateSelector;
