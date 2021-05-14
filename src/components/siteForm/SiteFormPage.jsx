import {useState, useEffect} from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import RestaurantForm from './RestaurantForm';
import AboutMeForm from './AboutMeForm';
import { ProgressBar } from 'react-bootstrap';
import { withAuthenticator } from '@aws-amplify/ui-react'

function SiteForm() {             
    const [postData, setPostData] = useState({});
    const [status, setStatus]     = useState(-1);

    const bucketName   = useSelector(state => state.bucket.bucketName);
    const templateName = useSelector(state => state.template.templateName);
    const progress     = useSelector(state => state.progress);

    const dispatch = useDispatch();

    dispatch({ 
        type: "ADD_HEADER",
        header: "Create Your Site"
      });

    useEffect(()=>{
        const generateWebsiteFiles = async () => {            
            const buildSiteResult = await axios.post(
                'https://aorhdaraf6.execute-api.us-west-1.amazonaws.com/prod/generateWebsiteFiles', postData);
            if (postData["location"] !== '') {
                setStatus(buildSiteResult.data.statusCode);
            }
        }
        generateWebsiteFiles()
    }, [postData]);
    
    return (
        <>
            <ProgressBar className="mt-3" now={progress}/>
            {(() => {
                switch (templateName) {
                    case 1:
                        return <RestaurantForm bucketName={bucketName} setPostData={setPostData} status={status} templateName={templateName}/>
                    case 2:
                        return <AboutMeForm bucketName={bucketName} setPostData={setPostData} status={status} templateName={templateName}/>
                    default:
                        return <p>loading</p>   
                }
            })()}
        </>
    )
    
}

export default SiteForm;


