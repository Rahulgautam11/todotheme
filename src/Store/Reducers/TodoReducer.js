const initialState = {
    todosList: [],
    update_ID: '',
    selected_ID: ''
}

const AddToReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_DO":
            return ({
                ...state,
                todosList: [...state.todosList, action.payload]
            })
        case "SELECT_UPDATE_ITEM":
            return ({
                ...state,
                selected_ID: action.payload,
                update_ID: action.payload,
            })
        case "RESET_UPDATE_ITEM":
            return ({
                ...state,
                selected_ID: ''
            })

        case "UPDATE_SELECTED_ITEM":
            return (
                {
                    ...state,
                    // todosList: [...state.todosList]
                }
            )
        case "DELETE_SELECTED_ITEM":
            return (
                {
                    ...state,
                }
            )
        case "COMPLETED_SELECTED_ITEM":
            return (
                {
                    ...state,
                    // todosList: [...state.todosList]
                }
            )
        default: return state
    }
}

export { AddToReducer }