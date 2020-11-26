export const initialState = {
    mainPageState: {
        text: "Initial text",
        isVisible: true,
    },
    modalState: {
        isOpen: false,
        content: '',
    },
    tasksState: {
        isFetching: false,
        tasks: []
    }
}
