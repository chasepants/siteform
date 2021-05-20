import { Button } from 'react-bootstrap';
import { useState } from 'react';
import ImageRow from '../../images/ImageRow';

import FormCardHeader from './FormCardHeader';
import getFormFields from '../../../assets/js/forms';

function FormCard({formPageName, defaultAddPage, formField}) {
    const [ showImages, setShowImages ] = useState(false);
    const [ addPage, setAddPage ]       = useState(defaultAddPage);

    const formFields = getFormFields(formField);

    return (
        <div className="col-sm-4 form-card p-3 d-flex flex-column justify-content-between" style={{"height": "500px"}}> 
            <div>
                <FormCardHeader formPageName={formPageName} setAddPage={setAddPage} defaultAddPage={defaultAddPage}/>
            </div>
            {
                addPage && (
                    <>
                        {
                            showImages ? <ImageRow/> : (
                                <div className="d-flex flex-column justify-content-between">
                                    { formFields }
                                </div>
                            )
                        }
                        <div className="text-center">
                            <Button className="w-50" variant="warning" onClick={() => setShowImages(!showImages)}>
                                {
                                    showImages ? "Show Form" : "Add Images"
                                }
                            </Button>
                        </div>
                    </>
                )
            }         
        </div>
    )
}

export default FormCard;