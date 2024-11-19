import axios from "axios";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
//function that fetches welcome message from the server
export const fetchWelcomeMessage = async () => {
    const response = await axios.get(`${REMOTE_SERVER}/lab5/welcome`);
    return response.data;
};


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

const TODOS_API = `${REMOTE_SERVER}/lab5/todos`;
//function that fetches the array of todo items from the server
export const fetchTodos = async () => {
    const response = await axios.get(TODOS_API);
    return response.data;
};

//function that removes todo item from the array then returns it
export const removeTodo = async (todo: any) => {
    const response = await axios.get(`${TODOS_API}/${todo.id}/delete`);
    return response.data;
};

//fixme: function that updates completion status of todo item then returns entire list
export const updateTodoCompletion = async (newStatus: boolean, todo: any) => {
    const response = await axios.get(`${TODOS_API}/${todo.id}/completed/${newStatus}`);
    return response.data;
}

//function that creates new empty todo item
export const createTodo = async () => {
    const response = await axios.get(`${TODOS_API}/create`);
    return response.data;
};


