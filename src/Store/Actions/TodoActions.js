const addTodo = (payload) => {
    return {
        type: "ADD_TO_DO",
        payload: payload
    }
}


const selectUpdateItem = (payload) => {
    return {
        type: "SELECT_UPDATE_ITEM",
        payload: payload
    }
}
const resetUpdateItem = () => {
    return {
        type: "RESET_UPDATE_ITEM"
    }
}
const updateSelectedITem = () => {
    return {
        type: "UPDATE_SELECTED_ITEM",
    }
}
const deleteSelectedITem = () => {
    return {
        type: "DELETE_SELECTED_ITEM",
    }
}
const CompletedSelectedITem = (payload) => {
    return {
        type: "COMPLETED_SELECTED_ITEM",
        payload: payload
    }
}


export {
    addTodo,
    selectUpdateItem,
    resetUpdateItem,
    updateSelectedITem,
    deleteSelectedITem,
    CompletedSelectedITem
}