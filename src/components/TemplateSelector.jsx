import {useState, useEffect} from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'


import {
    Link
} from 'react-router-dom';

function TemplateSelector() {
  const bucketName   = useSelector(state => state.bucketName);
  const templateName = useSelector(state => state.templateName);
  const dispatch     = useDispatch();

  const setTemplate = template => {
    console.log(template);
    dispatch({
      type: "ADD_TEMPLATE",
      templateName: template
    });
  }

  useEffect(async ()=>{
    const createBucketResult = await axios.get(
      'https://prt08pyot2.execute-api.us-west-1.amazonaws.com/prod/createBucket?bucketName='+bucketName
    );
    console.log(createBucketResult);
    console.log(templateName);
    console.log(bucketName);
  })

  return (
    <div className="App">
        <h1>siteform</h1>
        <p>Next select the template that best suites your business</p>
        <ul>
            <li><Link onClick={()=>{
              setTemplate(1)
            }
            } to='/site-form'>Restaurant</Link></li>
            <li><Link onClick={()=>{
              setTemplate(2)
            }
            } to='/site-form'>About Me</Link></li>
            {/* <li><Link onClick={()=>{
              setTemplate(3)
            }
            } to='/site-form'>Retail</Link></li>
            <li><Link onClick={()=>{
              setTemplate(4)
            }
            } to='/site-form'>Service Industry</Link></li> */}
        </ul>
    </div>
  );
}

export default TemplateSelector;
