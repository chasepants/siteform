
import { combineReducers } from 'redux';
import bucket from "./bucket";
import template from "./template";
import header from "./header";
import subHeaderReducer from './subHeader';
import breadCrumbReducer from './breadCrumb';
import progressReducer from './progress';

const root = combineReducers({
    bucket: bucket,
    template: template,
    header: header,
    subHeaderReducer: subHeaderReducer,
    breadCrumbs: breadCrumbReducer,
    progress: progressReducer
});

export default root;