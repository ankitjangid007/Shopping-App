import { legacy_createStore as createStore} from 'redux'
import reducers from './reducers/index'

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(reducers, {}, storeEnhancers);

export default store;