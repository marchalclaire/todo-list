import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] = useState([]);
  //Option 1: on peut créer un tab vide, boucler et l'intégrer dans le return ({return} sans balise car déjà traité ligne 12)
  // + appeler la fonction (toDoList();) dans le "onSubmit" : sinon créer fonction ".map" dans le formulaire ligne 31.

  //let result = [];
  // for (let i = 0; i < tasks.length; i++) {
  //   result.push(<div>{tasks[i].todo}</div>);
  //   console.log(result);
  // }
  // };

  return (
    <div className="App">
      <label>To-Do list</label>
      {/* {result} */}

      <form
        onSubmit={event => {
          event.preventDefault();
          const newTasks = [...tasks];
          newTasks.push({ todo: taskInput });
          setTasks(newTasks);
          // toDoList();
        }}
      >
        <div className="todolist">
          {tasks.map((task, index) => {
            return <div key={index}>{"X " + task.todo}</div>;
          })}
        </div>
        <input
          placeholder="Titre"
          type="text"
          className="text-input"
          value={taskInput}
          onChange={event => {
            setTaskInput(event.target.value);
          }}
        />
        <input className="button" type="submit" value="AJOUTER UNE TACHE" />
      </form>
    </div>
  );
};

export default App;
