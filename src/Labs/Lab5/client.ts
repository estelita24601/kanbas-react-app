import axios from "axios";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
//3.5.3 - function that fetches welcome message from the server
export const fetchWelcomeMessage = async () => {
    const response = await axios.get(`${REMOTE_SERVER}/lab5/welcome`);
    return response.data;
};

//3.5.5 - WORKING WITH REMOTE OBJECTS
const ASSIGNMENT_API = `${REMOTE_SERVER}/lab5/assignment`;
//function that fetches the assignment object from the server
export const fetchAssignment = async () => {
    const response = await axios.get(`${ASSIGNMENT_API}`);
    return response.data;
}

//function that updates the assignment title and then receives that updated assignment
export const updateTitle = async (newTitle: string) => {
    const response = await axios.get(`${ASSIGNMENT_API}/title/${newTitle}`);
    return response.data;
}

//3.5.6 - WORKING WITH REMOTE ARRAYS
const TODOS_API = `${REMOTE_SERVER}/lab5/todos`;
//function that fetches the array of todo items from the server
export const fetchTodos = async () => {
    const response = await axios.get(TODOS_API);
    return response.data;
};

//3.5.7 - DELETING DATA
//function that removes todo item from the array then returns it
export const removeTodo = async (todo: any) => {
    const response = await axios.get(`${TODOS_API}/${todo.id}/delete`);
    return response.data;
};

//3.5.8 - CREATING NEW DATA
//function that creates new empty todo item
export const createTodo = async () => {
    const response = await axios.get(`${TODOS_API}/create`);
    return response.data;
};

//3.6.1 - POST REQUESTS
export const postTodo = async (todo: any) => {
    const response = await axios.post(`${TODOS_API}`, todo);
    return response.data;
}

//3.6.2 - DELETE REQUESTS
export const deleteTodo = async (todo: any) => {
    const response = await axios.delete(`${TODOS_API}/${todo.id}`);
    return response.data;
};

//3.6.3 - PUT REQUESTS
export const updateTodo = async (todo: any) => {
    const response = await axios.put(`${TODOS_API}/${todo.id}`, todo);
    return response.data;
};

