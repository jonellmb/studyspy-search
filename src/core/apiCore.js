import { API } from "../config";

export const getCourses = sortBy => {
   return fetch(`${API}/course?sortBy=${sortBy}&order=desc&limit=6`, {
      //  return fetch(`${API}/course`, {
        method: "GET"
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};


//course?sortBy=level&order=desc&limit=4


export const getDurations = () => {
    return fetch(`${API}/duration`, {
        method: "GET"
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const getFilteredCourses = (skip, limit, filters = {}) => {
    const data = {
        limit,
        skip,
        filters
    };
    return fetch(`${API}/course/by/search`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
};