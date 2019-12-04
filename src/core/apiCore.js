import { API } from "../config";

export const getCourses = sortBy => {
    return fetch(`${API}/course?sortBy=${sortBy}&order=desc&limit=5`, {
        method: "GET"
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};


//course?sortBy=level&order=desc&limit=4