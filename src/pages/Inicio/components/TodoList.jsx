import TodoItem from "./TodoItem";

const TodoList = (props) => {
  // const tasks = props.tareas;
  const { tareas, toggleTask } = props;

  return (
    <ul className="list-group my-3">
      {tareas.map((tarea) => {
        return (
          <TodoItem key={tarea.id} tarea={tarea} toggleTask={toggleTask} />
        );
      })}
    </ul>
  );
};

export default TodoList;
