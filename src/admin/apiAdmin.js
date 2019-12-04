import { API } from "../config";

export const createCourse = (course) => {
    return fetch(`${API}/course/create`, {
        method: "POST",
        body: JSON.stringify(course)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
};
