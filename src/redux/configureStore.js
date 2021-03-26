import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import root from './reducers';

export default function configureStore() {
    return createStore(root, composeWithDevTools());
}