export const updateTextField = (newText) => {
    return {type: 'UPDATE_TEXT_FIELD', value: newText}
}

export const updateTextVisibility = (isVisible) => {
    return {type: 'UPDATE_TEXT_VISIBILITY', value: isVisible}
}
