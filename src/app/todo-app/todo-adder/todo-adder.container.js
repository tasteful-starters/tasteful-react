import { connect } from 'react-redux';

import { actions } from '@state';

const mapDispatchToProps = {
    addTodo: actions.todoListActions.AddTodo
};

export default connect(
    undefined,
    mapDispatchToProps
);