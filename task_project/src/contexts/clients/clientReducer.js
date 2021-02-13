import { ADD_CLIENT } from "../../types";

export default (state, action) => {
    switch (action.type) {
        case ADD_CLIENT:
            return {
                ...state,
                clients: [...state.clients, action.payload]
            }
        default: 
            return state
    }
}