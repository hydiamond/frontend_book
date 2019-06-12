import { combineReducers  } from 'redux';
import userReducers from './user.reducer';
import homeReducers from './home.reducer';
import productReducers from './product.reducer';
import profileReducers from './profile.reducer';
import cartReducers from './cart.reducer';
import purchaseReducers from './purchase.reducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
    userReducers,
    homeReducers,
    productReducers,
    profileReducers,
    cartReducers,
    purchaseReducers,
    form:formReducer
})