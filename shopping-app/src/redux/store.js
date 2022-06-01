import { applyMiddleware, compose, legacy_createStore as createStore} from 'redux'
import reducers from './reducers/index'
import thunk from 'redux-thunk'

// const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOOSE__ || compose

const store = createStore(
    reducers, 
    composeEnhancers(applyMiddleware(thunk))
);

export default store;