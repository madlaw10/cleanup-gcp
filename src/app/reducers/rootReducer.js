import { combineReducers } from 'redux';
import testReducer from '../../features/test-area/testReducer';

const rootReducer = combineReducers({
    test: testReducer
})

export default rootReducer;
