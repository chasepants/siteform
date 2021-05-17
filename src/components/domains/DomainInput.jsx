import React from 'react';
import {useSelector} from 'react-redux';

const DomainInput = ({domainName, setDomainAvailability, setDomainName}) => {
    
    const header = useSelector(state => state.header);

    return (
        <input className="mt-3" value={domainName} onChange={event => {
            setDomainAvailability('')
            setDomainName(event.target.value)
        }}/>
    )
}

export default DomainInput;