import { useDispatch } from 'react-redux';

import SubHeader from '../common/SubHeader';
import ImageRow from '../images/ImageRow';

function ImageSelector() {
    const dispatch = useDispatch();

    dispatch({
        type: "ADD_SUB_HEADER",
        header: "Upload images"
      })

    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <SubHeader/>
            <ImageRow/>
        </div>
    )
            
}

export default ImageSelector;