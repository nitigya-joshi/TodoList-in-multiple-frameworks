import './App.css';
import { useState, useRef, useEffect } from "react";

function App () {
    const [todos, setTodos] = useState([]);
    
    const todoText = useRef();

    function addTodo(event) {
        event.preventDefault();
        console.log(todoText.current);

        const next = [...todos, todoText.current.value]
        setTodos(next);
        todoText.current.value = "";
        localStorage.setItem("todos", JSON.stringify(next));
    }

    useEffect(() => {
        const existingTodos = localStorage.getItem("todos");
        setTodos(existingTodos ? JSON.parse(existingTodos) : []);
    }, []);

    return (
        <div className="container">
            <ul>
                {todos.map(todo => (
                    <li key={todo}>{todo}</li>
                ))}
            </ul>

            <form onSubmit={addTodo} className="form">
                <input ref={todoText} type="text" name="todo" placeholder="Add a todo task here.."/>
                <input type="submit" value="Add todo" />
            </form>
        </div>
    );
}

export default App;
