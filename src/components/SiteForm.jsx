import {useState, useEffect} from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux'

function SiteForm() {
    const [businessName, setBusinessName]               = useState('');
    const [businessDescription, setBusinessDescription] = useState('');
    const [hours, setHours]                             = useState('');
    const [location, setLocation]                       = useState('');
    const [slogan, setSlogan]                           = useState('');
    const [postData, setPostData]                       = useState({});
    const [status, setStatus]                           = useState(-1);

    const bucketName = useSelector(state => state.bucketName);
    console.log(bucketName);
    const templateName = useSelector(state => state.templateName);
    console.log(templateName);
 
    useEffect(()=>{
        const generateWebsiteFiles = async () => {            
            const buildSiteResult = await axios.post(
                'https://aorhdaraf6.execute-api.us-west-1.amazonaws.com/prod/generateWebsiteFiles', postData);
            console.log(buildSiteResult)
            if (postData["location"] !== '') {
                setStatus(buildSiteResult.data.statusCode);
            }
        }
        generateWebsiteFiles()
    }, [postData]);

    return (
        <div className="App">
            <h1>siteform</h1>
            <p>Tell us about your site</p>
            <label htmlFor="fname">Business Name:</label><br/>
            <input onChange={event => setBusinessName(event.target.value)} value={businessName} type="text" id="fname" name="fname"/><br/>
            <br/>
            <label htmlFor="fname">Business Description:</label><br/>
            <input onChange={event => setBusinessDescription(event.target.value)} value={businessDescription} type="text" id="fname" name="fname"/><br/>
            <br/>
            <label htmlFor="fname">Hours:</label><br/>
            <input onChange={event => setHours(event.target.value)} value={hours} type="text" id="fname" name="fname"/><br/>
            <br/>
            <label htmlFor="fname">Location:</label><br/>
            <input onChange={event => setLocation(event.target.value)} value={location} type="text" id="fname" name="fname"/><br/>
            <br/>
            <label htmlFor="fname">Slogan:</label><br/>
            <input onChange={event => setSlogan(event.target.value)} value={slogan} type="text" id="fname" name="fname"/><br/>
            <br/>
            <br/>
            <button onClick={event => setPostData({
                "businessName":        businessName,
                "businessDescription": businessDescription,
                "slogan":              slogan,
                "hours":               hours,
                "location":            location,
                "bucketName":          bucketName,
                "templateName":        templateName
            })}>Build Website</button>

            <br/>
           {
                status === 200 &&
                <h4>You can visit your site <a href={`http://${bucketName}.s3-website-us-west-1.amazonaws.com`}>HERE</a></h4>
            }
            
        </div>
    );
}

export default SiteForm;


