import produce from "immer";

const buildReducer = {
    '@cart/ADD': addToCart,
    '@cart/REMOVE': removeFromCart,
    '@cart/UPDATE_AMOUNT': updateAmount
}

export default function cart(state = [], action) {
    return buildReducer[action.type] ? buildReducer[action.type](state, action) : state;
}

function addToCart(state, action) {
    return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.product.id)
        if (productIndex >= 0)
            draft[productIndex].amount += 1;
        else
            draft.push({
                ...action.product,
                amount: 1
            });
    });
}

function removeFromCart(state, action) {
    return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.id);
        if (productIndex >= 0)
            draft.splice(productIndex, 1);
    });
}

function updateAmount(state, action) {
    if(action.amount <= 0)
        return state;
    return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.id);
        if (productIndex >= 0)
            draft[productIndex].amount = Number(action.amount)
    });
}