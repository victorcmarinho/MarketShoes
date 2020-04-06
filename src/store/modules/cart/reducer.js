export default function cart(state = [], action) {
    const buildReducer = {
        ADD_TO_CART(state, {product}){
            return [...state, product]
        }
    }
    return buildReducer[action.type] ? buildReducer[action.type](state, action) : state;

}
