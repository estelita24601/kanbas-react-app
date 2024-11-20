import React, { useState, useEffect } from "react";
import * as client from "./client";
import { FaPlusCircle, FaTrash } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import { FaPencil } from "react-icons/fa6";


export default function WorkingWithArraysAsynchronously() {
    const [todos, setTodos] = useState<any[]>([]);
    const [errorMessage, setErrorMessage] = useState(null);


    //3.6.1 - POST REQUESTS
    const postTodo = async () => {
        const newTodo = await client.postTodo({ title: "New Posted Todo", completed: false, });
        setTodos([...todos, newTodo]);
    };

    //3.6.2 - DELETE REQUEST
    const deleteTodo = async (todo: any) => {
        try {
            await client.deleteTodo(todo);
            const newTodos = todos.filter((t) => t.id !== todo.id);
            setTodos(newTodos);
        } catch (error: any) {
            console.log(error);
            setErrorMessage(error.response.data.message);
        }
    };

    //3.6.3 - PUT REQUESTS
    const editTodo = (todo: any) => {
        const updatedTodos = todos.map(
            (t) => t.id === todo.id ? { ...todo, editing: true } : t);
        setTodos(updatedTodos);
    };
    const updateTodo = async (todo: any) => {
        try {
            await client.updateTodo(todo);
            setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
        } catch (error: any) {
            setErrorMessage(error.response.data.message);
        }
    };


    //3.5.7 - DELETING DATA ASYNCHRONOUSLY
    const removeTodo = async (todo: any) => {
        const updatedTodos = await client.removeTodo(todo);
        setTodos(updatedTodos);
    };

    const createTodo = async () => {
        const todos = await client.createTodo();
        setTodos(todos);
    };

    const fetchTodos = async () => {
        const todos = await client.fetchTodos();
        setTodos(todos);
    };
    useEffect(() => { fetchTodos(); }, []);

    return (
        <div id="wd-asynchronous-arrays">
            <h3>Working with Arrays Asynchronously</h3>
            {errorMessage && (<div id="wd-todo-error-message" className="alert alert-danger mb-2 mt-2">{errorMessage}</div>)}
            <h4>
                Todos
                <FaPlusCircle id="wd-create-todo"
                    onClick={createTodo}
                    className="text-success float-end fs-3"
                />
                <FaPlusCircle id="wd-post-todo"
                    onClick={postTodo}
                    className="text-primary float-end fs-3 me-3"
                />

            </h4>

            <ul className="list-group">
                {todos.map((todo) => (
                    <li key={todo.id} className="list-group-item">
                        <input type="checkbox" defaultChecked={todo.completed} className="form-check-input me-2 float-start"
                            onChange={(e) => updateTodo({ ...todo, completed: e.target.checked })} />


                        <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
                            {!todo.editing ? (todo.title) : (
                                <input
                                    className="form-control w-50 float-start"
                                    defaultValue={todo.title}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            updateTodo({ ...todo, editing: false });
                                        }
                                    }}
                                    onChange={(e) => updateTodo({ ...todo, title: e.target.value })}
                                />
                            )}

                        </span>

                        <FaPencil onClick={() => editTodo(todo)} className="text-primary float-end me-2 mt-1" />

                        <FaTrash id="wd-remove-todo"
                            onClick={() => removeTodo(todo)}
                            className="text-danger float-end mt-1" />

                        <TiDelete id="wd-delete-todo"
                            onClick={() => deleteTodo(todo)}
                            className="text-danger float-end me-2 fs-3" />


                    </li>
                ))}
            </ul> <hr />
        </div>
    );
}
