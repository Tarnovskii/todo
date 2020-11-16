export const modalState = (state = {}, action) => {
    switch (action.type) {
        case 'UPDATE_MODAL_VISIBILITY': return {...state, isOpen: action.value}
        case 'UPDATE_MODAL_CONTENT': return {...state, content: action.value}
        default: return state
    }
}
