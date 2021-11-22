import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'
import { listReducer, urlReducer } from './reducers/urlReducer';

// let initialState = {
//     cart:{
//      cartItems: localStorage.getItem('cartItems') 
//       ? JSON.parse(localStorage.getItem('cartItems')) : [],
//       shippingInfo:  localStorage.getItem('shippingInfo') 
//       ? JSON.parse(localStorage.getItem('shippingInfo')) : {}
// }}


const reducer = combineReducers({  
    url: urlReducer,
    list: listReducer
   })

let initialState = {
   url:{
           urlItems: localStorage.getItem('urlItems') 
            ? JSON.parse(localStorage.getItem('urlItems')) : [],
        },
        urlList:  localStorage.getItem('urlList') 
      ? JSON.parse(localStorage.getItem('urlList')) : {}
                   }

const middlware = [thunk]
const store = createStore(reducer, initialState,composeWithDevTools(applyMiddleware(...middlware)))


export default store;