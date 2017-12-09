import { combineReducers } from 'redux';
import signInSignUpReducer from './reducer-signInSignUp';

const allReducers = combineReducers({
   isSignInSignUp : signInSignUpReducer
});

export default allReducers;