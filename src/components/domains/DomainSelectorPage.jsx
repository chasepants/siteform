// SERVICES
import {useState, useEffect} from 'react';
// import checkDomainNameAvailability from '../../services/api/domains';
import getSuggestedResults from '../../assets/js/domains';


//COMPONENTS
import { useDispatch } from 'react-redux';
import { Accordion, Button, Card, ProgressBar, InputGroup, FormControl } from 'react-bootstrap';

//CONSTANTS
// const { REACT_APP_MY_ENV } = process.env;

function DomainSelectorPage() {
  //redux 
  const dispatch = useDispatch();

  //component specific state
  const [domainName, setDomainName] = useState('');
  const [domainAvailability, setDomainAvailability] = useState('');
  const [search, setSearch] = useState('');
  // const bucketName = useSelector(state => state.bucketName);

  //dispatch to redux state
  dispatch({ type: "ADD_HEADER", header: "Choose A Domain" })

  //life-cycle hook
  useEffect(() => {
    if (search) {
      // const result = await checkDomainNameAvailability(search);

      // if (result.data['Availability'] === 'AVAILABLE') {
      //   dispatch({
      //       type: "ADD_BUCKET",
      //       bucketName: REACT_APP_MY_ENV === 'development' ? 'rapid-site-test-bucket' : search
      //   }); 
      // } 

      // setDomainAvailability(result.data['Availability']);
      setDomainAvailability("Available");

    }

  }, [search])
  
  return (
    <>
      <ProgressBar now={10}/>
      <div className="container"> 
        <div className="row mt-5">
          <div className="col-sm-6 offset-sm-3">
            <InputGroup onChange={event => {
              setDomainAvailability('')
              setDomainName(event.target.value)
            }} className="mb-3" value={domainName}>
              <FormControl placeholder="Pick A Domain Name To Start" id="basic-url" aria-describedby="basic-addon3" />
              <InputGroup.Append>
                <Button onClick={event => setSearch(domainName)}>Search</Button>
              </InputGroup.Append>
            </InputGroup>
          </div>
        </div> 
        <div className="row mt-3">
          <div className="col-sm-10 offset-sm-1">
            <Accordion defaultActiveKey="1">
              <Card>
                <Card.Header>
                    { domainAvailability ? "Your domain is available!" : "Suggested Results"}
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    <div className="d-flex flex-col">
                    {
                      domainAvailability && (
                        <div className="d-flex justify-content-between w-100">
                          <h3>{domainName}</h3>
                          <Button>Proceed</Button>
                        </div>
                      )
                    } 
                    {
                      !domainAvailability && getSuggestedResults()
                    } 
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
        </div>      
      </div>
    </>
  );
}

export default DomainSelectorPage;
