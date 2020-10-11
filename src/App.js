import React, { useState } from "react";
import { Button, InputLabel, FormControl, Input } from "@material-ui/core";
import "./App.css";
import Todo from "./Todo";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTod = (event) => {
    // console.log("helllllllllllllo");
    setTodos([...todos, input]);
    event.preventDefault();
    setInput("");
  };
  return (
    <div className="App">
      <h1>TodoApp Using React.js</h1>
      <form>
        <FormControl>
          <InputLabel>Write a Todo</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>

        <Button
          disabled={!input}
          type="submit"
          onClick={addTod}
          variant="contained"
          color="primary"
        >
          Add Todo
        </Button>

        {/**<button type="submit" onClick={addTod}>
          Add Todo
        </button> */}
      </form>
      <ul>
        {todos.map((todo) => (
          <Todo text={todo} />
          //  <li>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
