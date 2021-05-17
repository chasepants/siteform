import { useState } from 'react';

function AboutMeForm({bucketName, setPostData, status, templateName}) {
    const [businessName, setBusinessName]               = useState('');
    const [businessDescription, setBusinessDescription] = useState('');
    const [hours, setHours]                             = useState('');
    const [location, setLocation]                       = useState('');
    const [slogan, setSlogan]                           = useState('');

    return (
        <div className="d-flex flex-column justify-content-center align-items-center p-5">
            <p>Tell us about you</p>
            <label htmlFor="fname">Name:</label><br/>
            <input onChange={event => setBusinessName(event.target.value)} value={businessName} type="text" id="fname" name="fname"/><br/>
            <label htmlFor="fname">Description:</label><br/>
            <input onChange={event => setBusinessDescription(event.target.value)} value={businessDescription} type="text" id="fname" name="fname"/><br/>
            <label htmlFor="fname">Hours:</label><br/>
            <input onChange={event => setHours(event.target.value)} value={hours} type="text" id="fname" name="fname"/><br/>
            <label htmlFor="fname">Location:</label><br/>
            <input onChange={event => setLocation(event.target.value)} value={location} type="text" id="fname" name="fname"/><br/>
            <label htmlFor="fname">Slogan:</label><br/>
            <input onChange={event => setSlogan(event.target.value)} value={slogan} type="text" id="fname" name="fname"/><br/>
            <label htmlFor="fname">Pages:</label><br/>

            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
            <label for="vehicle1"> I have a bike</label><br/>
            <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
            <label for="vehicle2"> I have a car</label><br/>
            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
            
            <label for="vehicle3"> I have a boat</label><br/>
            <button onClick={() => setPostData({
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
    )
}

export default AboutMeForm;


