import { useDispatch } from 'react-redux';

import PricingPage from './PricingPage';

function SelectPricing() {
    const dispatch = useDispatch();

    dispatch({
        type: "COMPLETED_FORM",
        formComplete: true
    });

    dispatch({
        type: "UPDATE_FORM_INDEX",
        formIndex: 0
    });

    dispatch({
        type: "UPDATE_IS_FIRST_FORM",
        isFirstForm: true
    });

    dispatch({
        type: "UPDATE_IS_LAST_FORM",
        isLastForm: false
    });

    const choosePricing = _pricing => {
        dispatch({ 
            type: "ADD_PRICING",
            pricing: _pricing
        });
    }

    return <PricingPage choosePricing={choosePricing} nextPage="/domains" />
}

export default SelectPricing;