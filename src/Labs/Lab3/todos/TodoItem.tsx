const TodoItem = ( { todo = { done: true, title: 'Buy milk',
    status: 'COMPLETED' } }) => {
    return (
        <li className="list-group-item">
            <label>
                <input type="checkbox" className="me-2"                    defaultChecked={todo.done}/>
                {todo.title} ({todo.status})
            </label>
        </li>
    );
}
export default TodoItem;