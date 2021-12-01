import { Fragment, useEffect, useRef, useState } from "react";
import TodoList from "./components/TodoList";
import { v4 as uuidv4 } from "uuid";

const Inicio = () => {
  const tareasIniciales = [
    { id: 1, name: "Tarea 1", completed: false },
    { id: 2, name: "Tarea 2", completed: false },
    { id: 3, name: "Tarea 3", completed: false },
    { id: 4, name: "Tarea 4", completed: false },
  ];
  const [tareas, setTareas] = useState(tareasIniciales);
  const [title, setTitle] = useState("Ejemplo Sesión 6-7");
  const taskRef = useRef();

  useEffect(() => {
    console.log("Use Effect ejecutado");
    const tareasGuardadas = JSON.parse(localStorage.getItem("listApp.tareas"));
    if (tareasGuardadas) {
      setTareas(tareasGuardadas);
    }
    console.log(tareasGuardadas);
  }, []);

  useEffect(() => {
    console.log("Use Effect ejecutado TAREAS");
    localStorage.setItem("listApp.tareas", JSON.stringify(tareas));
  }, [tareas]);

  const toggleTask = (id) => {
    // setTitle("Ya no es un ejemplo...");
    const newTasks = [...tareas];
    const task = newTasks.find((task) => task.id === id);
    task.completed = !task.completed;
    setTitle("Ejemplo Sesión 6-7");
    setTareas(newTasks);
    // console.log(newTasks);
  };

  const borrarTareas = () => {
    console.log("Borrar Tareas");
    const newTasks = tareas.filter((tarea) => !tarea.completed);
    console.log(newTasks.length);
    setTareas(newTasks);
  };

  const agregarTarea = () => {
    console.log("Agregar Tarea");
    // console.log(taskRef.current.value);
    const nombreTarea = taskRef.current.value;
    // if (task === "") return;
    if (!(nombreTarea === "")) {
      console.log("IF TRUE");
      setTareas((tareasAnteriores) => {
        return [
          ...tareasAnteriores,
          { id: uuidv4(), name: nombreTarea, completed: false },
        ];
      });
      taskRef.current.value = null;
    }
  };

  return (
    <Fragment>
      <h1>{title + " - 27 Nov"}</h1>
      {/* <h2>{5 + 5}</h2> */}
      <TodoList tareas={tareas} toggleTask={toggleTask} />
      <div>
        Te quedan{" "}
        <span className="font-weight-bold text-danger h5">
          {tareas.filter((tarea) => !tarea.completed).length}
        </span>{" "}
        tareas por completar.
      </div>

      <input
        className="form-control my-2"
        type="text"
        placeholder="Agrega una nueva tarea"
        ref={taskRef}
      />
      <div className="d-flex justify-content-center">
        <button className="btn btn-info mx-1" onClick={agregarTarea}>
          +
        </button>
        <button className="btn btn-danger mx-1" onClick={borrarTareas}>
          -
        </button>
      </div>
    </Fragment>
  );
};

export default Inicio;
