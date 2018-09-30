import React from "react";

const TodoView = ({ todoList, toggleTodo, match }) => {

    const handleToDoCheckBoxChange = (event, i) => {
        const value = event.target.checked;
        toggleTodo({ index: i, value });
    }

    return (
        <div>
            <h1>TodoView works! - {match.params.id}</h1>
            <ul>
                {todoList
                    .filter((obj, i) => i === parseInt(match.params.id))
                    .map((obj, i) => (
                        <li key={i}>
                            <input
                                name={i}
                                type="checkbox"
                                checked={obj.done}
                                onChange={ e => handleToDoCheckBoxChange(e, parseInt(match.params.id)) }
                            />
                            {obj.name}
                        </li>)
                    )
                }
            </ul>
        </div>
    )
};

export default TodoView;