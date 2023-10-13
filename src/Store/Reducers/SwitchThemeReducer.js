const initialState = false

const SwitchThemeReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SWITCH_THEME":
            return action.payload;

        default: return state;
    }
}

export { SwitchThemeReducer };