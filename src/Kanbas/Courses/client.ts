import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER_A6;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;

export const fetchAllCourses = async () => {
    const { data } = await axiosWithCredentials.get(COURSES_API);
    return data;
};

export const deleteCourse = async (id: string) => {
    const { data } = await axiosWithCredentials.delete(`${COURSES_API}/${id}`);
    return data;
};

//a6 - 5.1.2
export const createCourse = async (course: any) => {
    console.log(`COURSES CLIENT createCourse - ${COURSES_API}`);
    const { data } = await axiosWithCredentials.post(COURSES_API, course);
    console.log(`\tresponse = ${JSON.stringify(data)}`);
    return data;
};

export const updateCourse = async (course: any) => {
    const { data } = await axiosWithCredentials.put(`${COURSES_API}/${course._id}`, course);
    return data;
};

export const findUsersForCourse = async (courseId: string) => {
    console.log(`COURSES CLIENT - ${COURSES_API}/${courseId}/users`);
    const response = await axios.get(`${COURSES_API}/${courseId}/users`);
    return response.data;
};

export const findModulesForCourse = async (courseId: string) => {
    //console.log(`COURSES CLIENT - looking for modules from course ${courseId}`)
    const response = await axiosWithCredentials.get(`${COURSES_API}/${courseId}/modules`);
    return response.data;
};

export const createModuleForCourse = async (courseId: string, module: any) => {
    const response = await axiosWithCredentials.post(
        `${COURSES_API}/${courseId}/modules`,
        module
    );
    return response.data;
};
