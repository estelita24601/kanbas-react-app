import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true }); //allow cookies
export const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export const API = `${REMOTE_SERVER}/api/enrollments`;

export const addEnrollment = async (userID: string, courseID: string) => {
    const { data } = await axios.post(`${API}/enroll/${userID}/${courseID}`);
    return data;
};

export const removeEnrollment = async (userID: string, courseID: string) => {
    const { data } = await axios.delete(`${API}/un-enroll/${userID}/${courseID}`);
    return data;
};