export const mainPageState = (state = {}, action) => {
    switch (action.type) {
        case 'UPDATE_TEXT_FIELD': return {...state, text: action.value}
        case 'UPDATE_TEXT_VISIBILITY': return {...state, isVisible: action.value}
        default: return state;
    }
}
