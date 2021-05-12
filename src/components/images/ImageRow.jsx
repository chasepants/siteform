import AWS from 'aws-sdk';
import {useState} from 'react';

// https://javascript.plainenglish.io/how-to-upload-files-to-aws-s3-in-react-591e533d615e

const S3_BUCKET ='rapid-express-images';
const REGION ='rapid-express-images';


AWS.config.update({
    accessKeyId: '',
    secretAccessKey: ''
})

const myBucket = new AWS.S3({
    params: { Bucket: S3_BUCKET},
    region: REGION,
})

function ImageRow() {

    const [progress , setProgress] = useState(0);
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileInput = (e) => {
        setSelectedFile(e.target.files[0]);
    }

    const uploadFile = (file) => {

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

    return (
        <div className="row">
            <div className="col-sm-2">Progress is {progress}%</div>
            <div className="col-sm-6">
                <input type="file" onChange={handleFileInput}/>
                <br/>
                <button onClick={() => uploadFile(selectedFile)}> Upload Images</button>
            </div>
        </div>
    )
}


export default ImageRow;