
import { combineReducers } from 'redux';
import bucket from "./bucket";
import template from "./template";
import header from "./header";
import subHeaderReducer from './subHeader';

const root = combineReducers({
    bucket: bucket,
    template: template,
    header: header,
    subHeaderReducer: subHeaderReducer
});

export default root;