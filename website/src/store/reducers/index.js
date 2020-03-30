import {combineReducers} from 'redux';
import auth from './authReducer';
import admin from './AdminReducer';

import site from './siteRedu';

export default combineReducers({
    auth,
    admin,
    site
});