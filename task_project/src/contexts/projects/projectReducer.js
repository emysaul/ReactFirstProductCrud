import { ADD_PROJECT, CHANGE_ALERT_ADD_PROJECT, SHOW_FORM_PROJECT } from "../../types";

export default (state, action) => {
    switch (action.type) {
        case SHOW_FORM_PROJECT:
            return {
                ...state,
                form: action.payload
            }
        case CHANGE_ALERT_ADD_PROJECT:
            return {
                ...state,
                alertAddProject: action.payload
            }
        case ADD_PROJECT:
            return {
                ...state,
                projects: [...state.projects, action.payload]
            }
        default:
            return state;
    }
}