import { applyMiddleware, combineReducers, createStore } from 'redux'

import CategoryReducer from './reducers/category.reducer'
import PlacesReducer from './palces.reducer'
import ProductReducer from './reducers/product.reducer'
import thunk from 'redux-thunk'

const RootReducer = combineReducers({
    categories: CategoryReducer,
    products: ProductReducer,
    places: PlacesReducer
}) 

export default createStore( RootReducer, applyMiddleware(thunk) );