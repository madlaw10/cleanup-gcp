import { combineReducers } from 'redux';
import testReducer from '../../features/test-area/testReducer';
import cleanupReducer from '../../features/cleanup/cleanupReducer';

const rootReducer = combineReducers({
    test: testReducer,
    cleanups: cleanupReducer
})

export default rootReducer;
