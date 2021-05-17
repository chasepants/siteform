import React from 'react';
import {useSelector} from 'react-redux';

const Header = () => {
    
    const header = useSelector(state => state.header);

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-6 offset-sm-3 text-center">
                    <h2>{header.header}</h2>
                </div>
            </div>
        </div>
    )
}

export default Header;