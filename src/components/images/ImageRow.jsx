import AWS from 'aws-sdk';
import {useState} from 'react';

function ImageRow() {
    const [progress , setProgress] = useState(0);
    const [selectedFile, setSelectedFile] = useState(null);

    const S3_BUCKET ='rapid-express-images';
    const REGION ='rapid-express-images';

    const { REACT_APP_AWS_ACCESS_KEY, REACT_APP_AWS_SECRET_KEY, REACT_APP_MY_ENV } = process.env;

    AWS.config.update({
        accessKeyId: REACT_APP_AWS_ACCESS_KEY,
        secretAccessKey: REACT_APP_AWS_SECRET_KEY
    })

    const myBucket = new AWS.S3({
        params: { Bucket: S3_BUCKET},
        region: REGION,
    })

    const handleFileInput = (e) => {
        setSelectedFile(e.target.files[0]);
    }

    const uploadFile = (file) => {

        if (REACT_APP_MY_ENV === "development") {
            setProgress(100);
        } else {
            const params = {
                ACL: 'public-read',
                Body: file,
                Bucket: S3_BUCKET,
                Key: file.name
            };
            
            myBucket.putObject(params)
            .on('httpUploadProgress', (evt) => {
                setProgress(Math.round((evt.loaded / evt.total) * 100))
            })
            .send((err) => {
                if (err) console.log(err)
            });  
        }
    
    }

    return (
        <div className="d-flex flex-column h-100">
            <div className="mt-2">Progress is {progress}%</div>
            <input className="mt-2" type="file" onChange={handleFileInput}/>
            <button  className="mt-2 w-50" onClick={e => {
                e.preventDefault();
                uploadFile(selectedFile);    
            }}> Upload </button>
        </div>
    )
}


export default ImageRow;