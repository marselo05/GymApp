import { FILTER_PORDUCT, SELECT_PRODUCT } from '../actions/product.actions'

import {PRODUCTOS} from '../../data/products'

const initialState = {
    products: PRODUCTOS,
    filteredProduct: [],
    selected: null
}

const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_PRODUCT:
            return {
                ...state,
                selected: state.products.find( product => product.id === action.productID)
            }
        case FILTER_PORDUCT:
            return {
                ...state,
                filteredProduct: state.products.filter( product => product.category == action.categoryID)
            }
        default:
            return state
    }
}

export default ProductReducer;
