import { useState } from "react";
import axios from "axios";
import "./styles.css";
import { Todo } from "./todo";
import { todoType } from "./types/todo";

export default function App() {
  const [todos, setTodos] = useState<Array<todoType>>([]);
  const onClickFetchData = () => {
    axios
      .get<Array<todoType>>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setTodos(res.data);
      });
  };
  return (
    <div className="App">
      <button onClick={onClickFetchData}>ボタン</button>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          title={todo.title}
          userId={todo.userId}
          completed={todo.completed}
        />
      ))}
    </div>
  );
}
