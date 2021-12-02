export const SELECT_PRODUCT = 'SELECT_PRODUCT'
export const FILTER_PORDUCT = 'FILTER_PORDUCT'

export const selectProduct = (id) => ({
    type: SELECT_PRODUCT,
    productID: id
}) 

export const filterProduct = (id) => ({
    type: FILTER_PORDUCT,
    categoryID: id
})