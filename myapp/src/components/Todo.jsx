import React from "react";
import { useState } from "react";

export default function Todo() {
  const [input, setInput] = useState("");
  const [Description, setDescription] = useState("");
  const [tasks, setTask] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTask([...tasks, { input: input, Description: Description }]);
    // console.log(task);
    // console.log(input, Description);
  };
  return (
    <div>
      <h1> Todo Application</h1>

      <form className="form" action="" onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          name="input"
          value={input}
          placeholder="Name"
          onChange={(e) => setInput(e.target.value)}
        />
        <input
          className="input"
          type="text"
          name="description"
          //   value={Description}
          placeholder="description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="button">Button</button>
      </form>
      <div>
        {tasks.map((task, index) => {
          //   console.log(task, index);
          return (
            <div>
              {" "}
              <h1 key={index}>Input :- {task.input}</h1>
              <h1 key={index}>Description :- {task.Description}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}
