
export default function productsReducer(state = [], action){
    switch(action.type){
        case 'updateUser':
            return action.payload;
        default:
            return state;
    }
}