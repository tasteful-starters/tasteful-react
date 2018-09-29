import { connect } from 'react-redux';

import { actions } from '@state';

const mapStateToProps = (state) => ({
    counter: state.counter,
});

const mapDispatchToProps = {
    decrement: actions.counterActions.Decrement,
    increment: actions.counterActions.Increment
};

const AboutContainer = connect(
    mapStateToProps,
    mapDispatchToProps
);

export default AboutContainer;