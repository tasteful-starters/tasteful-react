const AddTodo = ({ name }) => ({
    type: '[TODO-LIST] Add TODO',
    payload: { name }
});

const ToggleTodo = ({ index, value }) => ({
    type: '[TODO-LIST] Toggle TODO',
    payload: { index, value }
});

export default {
    AddTodo,
    ToggleTodo,
}