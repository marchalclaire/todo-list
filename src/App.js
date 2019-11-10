import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] = useState([]);
  //Option 1: on peut créer un tab vide, boucler et l'intégrer dans le return ({return} sans balise car déjà traitées ligne 12)
  // + appeler la fonction (toDoList();) dans le "onSubmit" : sinon créer fonction ".map" dans le formulaire ligne 31.

  //let result = [];
  // for (let i = 0; i < tasks.length; i++) {
  //   result.push(<div>{tasks[i].todo}</div>);
  //   console.log(result);
  // }
  // };

  return (
    <div className="App">
      <p>To-Do list</p>
      {/* {result} */}

      <div className="todolist">
        {tasks.map((task, index) => {
          return (
            <>
              <span
                onClick={event => {
                  const newTasks = [...tasks];
                  newTasks.splice(index, 1);
                  setTasks(newTasks);
                }}
              >
                X{" "}
              </span>
              <span
                key={index}
                onClick={event => {
                  const newTasks = [...tasks];

                  //newTasks[index].done =
                  // newTasks[index].done === true ? false : true; OU

                  newTasks[index].done = !newTasks[index].done;

                  setTasks(newTasks);
                }}
                className={task.done === true ? "done" : ""}
              >
                {task.todo}
              </span>{" "}
              <br />
            </>
          );
        })}
      </div>
      <input
        placeholder="Titre"
        type="text"
        value={taskInput}
        className="text-input"
        onChange={event => {
          setTaskInput(event.target.value);
        }}
      />
      <input
        className="button"
        onClick={event => {
          const newTasks = [...tasks];
          newTasks.push({ todo: taskInput, done: false });
          setTasks(newTasks);
          setTaskInput("");
          // toDoList();
        }}
        value="AJOUTER UNE TACHE"
      />
    </div>
  );
};

export default App;
