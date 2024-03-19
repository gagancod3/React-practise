import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    //*name of slice
    name: 'cart',
    //* initial state
    initialState: {
        items: [],
    },
/*reducers - A mapping from action types to action-type-specific
case reducer functions.*/
    reducers: {
        //*action: reducer function(state, action)
        //*action is an optional parameter
        addItem: (state, action) => {
            //mutating the state here
            state.items.push(action.payload);
        },
        removeItem: (state) => {
            state.items.pop();
        },
        clearCart: (state) => {
            state.items.length = 0;
        }, 
    },
});
/*Action creators for the types of actions that are handled by 
the slice reducer. */
export const {addItem, removeItem, clearCart} = cartSlice.actions;
//* exporting reducer - The slice's reducer.
export default cartSlice.reducer;