import React from 'react';
import {useSelector} from 'react-redux';

const SubHeader = () => {
    
    const subHeader = useSelector(state => state.subHeaderReducer.text);

    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-sm-6 offset-sm-3 text-center">
                    <p>{subHeader}</p>
                </div>
            </div>
        </div>
    )
}

export default SubHeader;