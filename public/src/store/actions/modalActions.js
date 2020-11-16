export const updateModalVisibility = (isOpen) => {
    return {type: 'UPDATE_MODAL_VISIBILITY', value: isOpen}
}

export const updateModalContent = (content) => {
    return {type: 'UPDATE_MODAL_CONTENT', value: content}
}
