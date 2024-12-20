import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true }); //allow cookies
export const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export const USERS_API = `${REMOTE_SERVER}/api/users`;


export const signin = async (credentials: any) => {
    console.log(`CLIENT signin - ${USERS_API}/signin`);
    const response = await axiosWithCredentials.post(`${USERS_API}/signin`, credentials);
    return response;
};

//4.2.2
export const signup = async (user: any) => {
    console.log(`CLIENT signup - ${USERS_API}/signup`);
    const response = await axiosWithCredentials.post(`${USERS_API}/signup`, user);
    return response.data;
};

//4.2.3
export const updateUser = async (user: any) => {
    const response = await axiosWithCredentials.put(`${USERS_API}/${user._id}`, user);
    return response.data;
};

//4.2.4
export const getProfile = async () => {
    const response = await axiosWithCredentials.post(`${USERS_API}/profile`);
    return response.data;
};

//4.2.5
export const signout = async () => {
    const response = await axiosWithCredentials.post(`${USERS_API}/signout`);
    return response.data;
};

//4.4.1
export const findMyCourses = async () => {
    const { data } = await axiosWithCredentials.get(`${USERS_API}/current/courses`);
    return data;
};

//4.4.2
export const createCourse = async (course: any) => {
    //on the backend this also creates a new enrollment
    const { data } = await axiosWithCredentials.post(`${USERS_API}/current/courses`, course);
    return data;
};


