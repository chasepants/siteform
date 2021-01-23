import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';

function App() {
  const [domainName, setDomainName] = useState('');
  const [domainAvailability, setDomainAvailability] = useState('');
  const [search, setSearch] = useState('');

  useEffect(async () => {
    const checkDomainNameAvailability = async () => {
      const result = await axios(
        `https://j7thv6xq6e.execute-api.us-west-1.amazonaws.com/prod/MyServerlessWebsite?domain=${search}`
      )
      console.log(result)
      setDomainAvailability(result.data['Availability']);
    };
    checkDomainNameAvailability();
  }, [search])
  
  return (
    <div className="App">
      <header className="App-header">
        <h2>siteform</h2>
        <p>domain:</p> <input value={domainName} onChange={event => setDomainName(event.target.value)}/>
        <br></br>
        <button onClick={event => setSearch(domainName)}>check availability</button>
        <h4>{domainName} is {domainAvailability}</h4>
      </header>
    </div>
  );
}

export default App;
