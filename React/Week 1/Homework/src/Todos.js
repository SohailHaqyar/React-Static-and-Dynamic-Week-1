import React from "react";

const Todos = ({ todos , deleteTodo}) => {
  const todoList = todos.length ? (
    todos.map(todo => (
      <div className="collection-item" key={todo.id}>
        <span
          onClick={() => {
            deleteTodo(todo.id);
          }}
        >
          {todo.description}
        </span>
      </div>
    ))
  ) : (
    <div>
      <h2 className="center">
        Procrastinators Unite .... Like Tomorrow
      </h2>
    </div>
  );
  return <div className="Todo collection">{todoList}</div>;
};
export default Todos;
