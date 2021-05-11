// SERVICES
import {useState, useEffect} from 'react';
import checkDomainNameAvailability from '../../services/api/domains';

//COMPONENTS
import { useSelector, useDispatch } from 'react-redux';
import { Button, ProgressBar } from 'react-bootstrap';
import DomainNameToast from './DomainToast';
import SubHeader from '../common/SubHeader';
import DomainInput from './DomainInput';

//CONSTANTS
const { REACT_APP_MY_ENV } = process.env;

function DomainSelectorPage() {
  //redux 
  const dispatch = useDispatch();

  //component specific state
  const [domainName, setDomainName] = useState('');
  const [domainAvailability, setDomainAvailability] = useState('');
  const [search, setSearch] = useState('');
  const bucketName = useSelector(state => state.bucketName);

  //dispatch to redux state
  dispatch({ type: "ADD_HEADER", header: "Create Your Website" })
  dispatch({ type: "ADD_SUB_HEADER", header: "First, search for an available domain name." })

  //life-cycle hook
  useEffect(async () => {
    if (search) {
      const result = await checkDomainNameAvailability(search);

      if (result.data['Availability'] === 'AVAILABLE') {
        dispatch({
            type: "ADD_BUCKET",
            bucketName: REACT_APP_MY_ENV === 'development' ? 'rapid-site-test-bucket' : search
        }); 
      } 

      setDomainAvailability(result.data['Availability']);
    }

  }, [search])
  
  return (
    <>
      <ProgressBar now={33}/>

      <div className="d-flex flex-column justify-content-center align-items-center">
        <SubHeader/>

        <DomainInput 
          domainName={domainName}
          setDomainAvailability={setDomainAvailability} 
          setDomainName={setDomainName} 
        />
        
        <Button className="mt-4" onClick={event => setSearch(domainName)}>check availability</Button>

        <DomainNameToast domain={domainName} availability={domainAvailability} />
      </div>
    </>
  );
}

export default DomainSelectorPage;
