import produce from "immer";

const buildReducer = {
    '@cart/ADD_SUCCESS': addToCart,
    '@cart/REMOVE': removeFromCart,
    '@cart/UPDATE_AMOUNT_SUCCESS': updateAmount
}

export default function cart(state = [], action) {
    return buildReducer[action.type] ? buildReducer[action.type](state, action) : state;
}

function addToCart(state, action) {
    return produce(state, draft => {
        draft.push({
            ...action.product
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
    return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.id);
        if (productIndex >= 0)
            draft[productIndex].amount = Number(action.amount)
    });
}