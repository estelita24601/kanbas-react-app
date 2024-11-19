import React, { useState, useEffect } from "react";
import * as client from "./client";
import { FaPlusCircle, FaTrash } from "react-icons/fa";
import { updateTodoCompletion } from './client';
export default function WorkingWithArraysAsynchronously() {
    const [todos, setTodos] = useState<any[]>([]);

    const removeTodo = async (todo: any) => {
        const updatedTodos = await client.removeTodo(todo);
        setTodos(updatedTodos);
    };

    const createTodo = async () => {
        const todos = await client.createTodo();
        setTodos(todos);
    };

    const updateTodoCompletion = async (isChecked: boolean, todo: any) => {
        const updatedTodos = await client.updateTodoCompletion(isChecked, todo);
        setTodos(updatedTodos);
    }

    const fetchTodos = async () => {
        const todos = await client.fetchTodos();
        setTodos(todos);
    };
    useEffect(() => {
        fetchTodos();
    }, []);

    return (
        <div id="wd-asynchronous-arrays">
            <h3>Working with Arrays Asynchronously</h3>
            <h4>
                Todos
                <FaPlusCircle id="wd-create-todo"
                    onClick={createTodo}
                    className="text-success float-end fs-3"
                />
            </h4>

            <ul className="list-group">
                {todos.map((todo) => (
                    <li key={todo.id} className="list-group-item">

                        {/* fixme: attempt to have todo items update with checkbox but isn't working? */}
                        <input type="checkbox"
                            className="form-check-input me-2"
                            defaultChecked={todo.completed}
                            onChange={(e) => {
                                updateTodoCompletion(e.target.checked, todo)
                            }}
                        />

                        <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
                            {todo.title}
                        </span>

                        <FaTrash onClick={() => removeTodo(todo)}
                            className="text-danger float-end mt-1" id="wd-remove-todo" />

                    </li>
                ))}
            </ul> <hr />
        </div>
    );
}
