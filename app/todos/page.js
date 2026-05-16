"use client";
import { useState } from "react";

export default function Todos(){
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");
    

    function addTodo(){
        if(input.trim() === "") return;
        setTodos([...todos, { id: Date.now(), text:input, done:false}]);
        setInput("");
    }

    function toggleTodo(id){
        setTodos(todos.map((todo) => 
            todo.id === id ? { ...todo, done: !todo.done } : todo 
        ));
    }

    function deleteTodo(id){
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    const remaining = todos.filter((todo) => !todo.done).length;

    return(
        <main className="p-8 max-w-lg mx-auto">
            <h1 className="text-3xl font-bold mb-6">To-Do List</h1>

            <div className="flex gap-2 mb-6">
                <input 
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && addTodo()}
                    placeholder="Add a task..."
                    className="border rounded-lg px-4 py-2 flex-1"
                />
                <button
                    onClick={addTodo}
                   
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                    Add
                </button>
            </div>

                <div className="flex flex-col gap-3">
                    <p className="font-thin">{remaining} tasks remaining</p>
                    {todos.map((todo) => (
                        <div key={todo.id} className="flex items-center gap-3 border rounded-lg p-3">
                            <input 
                                type="checkbox"
                                checked={todo.done}
                                onChange={() => toggleTodo(todo.id)}
                                className="w-4 h-4 cursor-pointer"   
                            />
                            <span className={`flex-1 ${todo.done ? "line-through text-gray-400" : ""}`}>
                                {todo.text}
                            </span>
                            <button
                                onClick={() => deleteTodo(todo.id)}
                                className="text-red-400 hover:text-red-600 text-sm"
                            >
                                Delete
                            </button>
                        </div>
                    ))}


                    {todos.length === 0 && (
                        <p className="text-gray-400 text-center">
                            No task yet. Add one above.
                        </p>
                    )}
                </div>
        </main>
    );
}