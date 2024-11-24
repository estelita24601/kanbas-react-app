import axios from "axios";
export const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export const API = `${REMOTE_SERVER}/api/enrollments`;

//fixme
export const addEnrollment = async (userID: string, courseID: string) => {
    console.log(`CLIENT - addEnrollment ${API}/enroll/${userID}/${courseID}`)
    const { data } = await axios.post(`${API}/enroll/${userID}/${courseID}`);
    return data;
};

//fixme
export const removeEnrollment = async (userID: string, courseID: string) => {
    console.log(`CLIENT - removeEnrollment ${API}/un-enroll/${userID}/${courseID}`)
    const { data } = await axios.delete(`${API}/un-enroll/${userID}/${courseID}`);
    return data;
};

//fixme?
export const getEnrollmentsForUser = async (userID: string) => {
    console.log(`CLIENT - getEnrollments ${API}/${userID}`);
    const { data } = await axios.get(`${API}/${userID}`);
    return data;
};