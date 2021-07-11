import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootreducer from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootreducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;