import {combineReducers} from 'redux';
import auth from './authReducer';
import admin from './AdminReducer';

export default combineReducers({
    auth,
    admin
});