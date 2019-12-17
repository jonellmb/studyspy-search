import React, { useState, useEffect } from "react";

const Checkbox = ({ durations, handleFilters }) => {
    const [checked, setCheked] = useState([]);

    const handleToggle = c => () => {
        // return the first index or -1
        const currentDurationId = checked.indexOf(c);
        const newCheckedDurationId = [...checked];
        // if currently checked was not already in checked state > push
        // else pull/take off
        if (currentDurationId === -1) {
            newCheckedDurationId.push(c);
        } else {
            newCheckedDurationId.splice(currentDurationId, 1);
        }
       // console.log(newCheckedDurationId);
        setCheked(newCheckedDurationId);
        handleFilters(newCheckedDurationId)
    };



    return durations.map((c, i) => (
        <li key={i} className="list-unstyled">
            <input
                onChange={handleToggle(c._id)}
                value={checked.indexOf(c._id === -1)}
                type="checkbox"
                className="form-check-input"
            />

            <label className="form-check-label">{c.durationname}</label>
        </li>

    ));

    
};

export default Checkbox;
