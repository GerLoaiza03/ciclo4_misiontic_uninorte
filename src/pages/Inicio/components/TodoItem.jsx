const TodoItem = (props) => {
  const { tarea, toggleTask } = props;
  let { id, name, completed } = tarea;

  const handleOnChange = () => {
    toggleTask(id);
  };
  return (
    <li className="list-group-item">
      <input type="checkbox" onChange={handleOnChange} checked={completed} />{" "}
      {id}: {name}
    </li>
  );
};

export default TodoItem;
