import { Form } from 'react-bootstrap';


function FormCardHeader({formPageName, setAddPage, defaultAddPage}) {
   return <>
        <h3>{formPageName} Page</h3>
        <small className="mb-2 text-muted form-text">Match the form names to the names on the example image on the right</small>
        <div>
        {
            !defaultAddPage && (
                <>
                    <Form.Group>
                        <h6>Do you want a {formPageName} page?</h6>
                        <label className="radio-inline">
                            <input type="radio" name="add-page" onClick={() => setAddPage(true)}/>
                            Yes
                        </label>
                        <label className="radio-inline ml-4">
                            <input type="radio" name="add-page" onClick={() => setAddPage(false)}/> 
                            No
                        </label>
                    </Form.Group>
                </>
            )
        }
        </div>
    </>;
}

export default FormCardHeader;