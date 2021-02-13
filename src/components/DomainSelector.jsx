import {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'

function DomainSelector() {
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
    console.log(bucketName);
    console.log(templateName);

    const checkDomainNameAvailability = async () => {
      const result = await axios(
        `https://j7thv6xq6e.execute-api.us-west-1.amazonaws.com/prod/MyServerlessWebsite?domain=${search}`
      )

      if (result.data['Availability'] === 'AVAILABLE') {
        dispatch({
          type: "ADD_BUCKET",
          bucketName: search+'-'+bucketName
        })
      }  
          
      setDomainAvailability(result.data['Availability']);
    };
    checkDomainNameAvailability();
    
  }, [search])
  
  return (
    <div className="App">
      <h1>siteform</h1>
      <p>First find a domain:</p> <input value={domainName} onChange={event => {
      setDomainAvailability('')
      setDomainName(event.target.value)
      }}/>
      <br/><br/>
      <button onClick={event => setSearch(domainName)}>check availability</button>
      {
      domainAvailability.length > 0 &&
      <h3>
          {domainName} is {domainAvailability}
      </h3>
      }
      <br/><br/>
      {
      domainAvailability === 'AVAILABLE' &&
      <button>
        <Link onClick={()=> {
          buyDomainAndSetBucket()
        }} to='/templates'>Continue</Link>
      </button>
      }
    </div>
  );
}

export default DomainSelector;
