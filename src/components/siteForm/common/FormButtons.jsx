import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function FormButtons() {

    const dispatch = useDispatch();

    const isLastForm  = useSelector(state => state.form.isLastForm);
    const isFirstForm = useSelector(state => state.form.isFirstForm);
    const formIndex   = useSelector(state => state.form.formIndex);

    return <div className="row">
                <div className="col-sm-2 offset-sm-4 text-center">
                    {(() => {
                        if (!isFirstForm) {
                            return <Button variant="danger" onClick={() => {
                                if (formIndex == 1) {
                                    dispatch({
                                        type: "UPDATE_IS_FIRST_FORM",
                                        isFirstForm: true
                                    })
                                }
                                dispatch({
                                    type: "UPDATE_FORM_INDEX",
                                    formIndex: formIndex-1
                                })
                            }}>
                                    Back
                            </Button>;
                        }
                    })()}
                </div>
                <div className="col-sm-2 text-center">
                    {(() => {
                        if (!isLastForm) {
                            return <Button variant="success" onClick={() => {
                                        dispatch({
                                            type: "UPDATE_FORM_INDEX",
                                            formIndex: formIndex+1
                                        })
                                    }}>
                                    Continue
                                </Button>;
                        }
                    })()}
                </div>
                <div className="col-sm-2 text-center">
                    {(() => {
                        if (isLastForm) {
                            return (<Link to='/choose-plan'>
                                    <Button variant="success">
                                        Save
                                    </Button>
                                </Link>);
                        }
                    })()}
                </div>
            </div>
}

export default FormButtons;

{/* {(()=>{
                    if (endOfForm) {
                        return <>
                                    <br/>
                                    <Link to='/images'>
                                        <Button variant="primary">
                                            Save
                                        </Button>
                                    </Link>
                                </>;
                    }
                })()} */}