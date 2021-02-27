import {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Form } from 'react-bootstrap';


function DomainSelector() {
  const { REACT_APP_MY_ENV } = process.env;
  const [domainName, setDomainName] = useState('');
  const [domainAvailability, setDomainAvailability] = useState('');
  const [search, setSearch] = useState('');
  const bucketName = useSelector(state => state.bucketName);
  const templateName = useSelector(state => state.templateName);

  const dispatch = useDispatch();

  const buyDomainAndSetBucket = async () => {    
    console.log(bucketName);
  }

  useEffect(async () => {
    const checkDomainNameAvailability = async () => {
      let result = null;
      
      if (REACT_APP_MY_ENV !== 'development') {
        result = await axios(
          `https://j7thv6xq6e.execute-api.us-west-1.amazonaws.com/prod/MyServerlessWebsite?domain=${search}`
        )

        if (result.data['Availability'] === 'AVAILABLE') {
          dispatch({
            type: "ADD_BUCKET",
            bucketName: search
          })
        } 
      } else {
        result = {
          data: {
            Availability: 'AVAILABLE'
          }
        };

        dispatch({
          type: "ADD_BUCKET",
          bucketName: 'rapid-site-test-bucket'
        })
      } 
          
      setDomainAvailability(result.data['Availability']);
    }

    if (search) {
      checkDomainNameAvailability();
    }

  }, [search])
  
  return (
    <div className="d-flex flex-column justify-content-center align-items-center p-5">
      <h1>siteform</h1>
      <p>First find a domain:</p> <input value={domainName} onChange={event => {
      setDomainAvailability('')
      setDomainName(event.target.value)
      }}/>
      <br/><br/>
      <Button onClick={event => setSearch(domainName)}>check availability</Button>
      <br/><br/>
      {
      domainAvailability === 'AVAILABLE' &&
      <h3>
          {domainName} is {domainAvailability}
      </h3>
      }
      <br/><br/>
      {
        domainAvailability === 'AVAILABLE' &&
            <Link type="button" className="btn btn-primary" style={{ textDecoration: 'none', border: 'none' }} onClick={()=> {
              buyDomainAndSetBucket()
            }} to='/templates'>
                Continue
            </Link>
      }
    </div>
  );
}

export default DomainSelector;
