import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function FormButtons() {
    const dispatch = useDispatch();

    const isLastForm  = useSelector(state => state.form.isLastForm);
    const isFirstForm = useSelector(state => state.form.isFirstForm);
    const formIndex   = useSelector(state => state.form.formIndex);

    let classes = "col-sm-4 offset-sm-4 d-flex pl-5 pr-5";
    classes += formIndex > 0 ? " justify-content-between" : " justify-content-end";

    return (
        <div className="row mt-3">
            <div className={classes}>
                {(() => {
                    if (!isFirstForm) {
                        return (
                            <Button variant="danger" onClick={() => {
                                if (formIndex === 1) {
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
                            </Button>
                        );
                    }
                })()}
                {(() => {
                    if (!isLastForm) {
                        return (
                            <Button variant="success" onClick={() => {
                                dispatch({
                                    type: "UPDATE_FORM_INDEX",
                                    formIndex: formIndex+1
                                })
                            }}>
                                Continue
                            </Button>
                        );
                    }
                })()}
                {(() => {
                    if (isLastForm) {
                        return (
                            <Link to='/choose-plan'>
                                <Button variant="success">
                                    Save
                                </Button>
                            </Link>
                        );
                    }
                })()}
            </div>
        </div>
    )
}

export default FormButtons;