import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import Card from "./Card";
import { getDurations,getFilteredCourses,getCourses } from "./apiCore";
import Checkbox from "./Checkbox";
import Slider, { createSliderWithTooltip } from 'rc-slider';
import 'rc-slider/assets/index.css';


const Search = () => {
    const [myFilters, setMyFilters] = useState({
        filters: { durations: [] }
    });

    const [durations, setDurations] = useState([]);
    const [error, setError] = useState(false);
    const [limit, setLimit] = useState(3);
    const [skip, setSkip] = useState(0);
    const [size, setSize] = useState(0);
    const [filteredResults, setFilteredResults] = useState([]);
 
    const init = () => {
        getDurations().then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setDurations(data);
            }
        });


    };

 

    const loadFilteredResults = newFilters => {
        // console.log(newFilters);
        getFilteredCourses(skip, limit, newFilters).then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setFilteredResults(data.data);
                setSize(data.size);
                setSkip(0);
            }
        });
    };


    const loadMore = () => {
        let toSkip = skip + limit;
        // console.log(newFilters);
        getFilteredCourses(toSkip, limit, myFilters.filters).then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setFilteredResults([...filteredResults, ...data.data]);
                setSize(data.size);
                setSkip(toSkip);
            }
        });
    };

    const loadMoreButton = () => {
        return (
            size > 0 &&
            size >= limit && (
                <button onClick={loadMore} className="btn btn-warning mb-5">
                    Load more
                </button>
            )
        );
    };

    useEffect(() => {
        init();
        loadFilteredResults(skip, limit, myFilters.filters);
    }, []);

    const handleFilters = (filters, filterBy) => {
   //     console.log("DURATION", filters, filterBy);
        const newFilters = {...myFilters}
        newFilters.filters[filterBy] = filters

      loadFilteredResults(myFilters.filters)  
        setMyFilters(newFilters);

    };




    return (
        <Layout
            title="Compare every course."
            description="Search every course in New Zealand – from apprenticeships to university degrees, from Kaitaia to Invercargill."
            className="container-fluid"
        >
            <div className="row">
            <div className="col-4">
            <h4>Filter by Duration</h4>
                    <ul>
                        <Checkbox 
                        durations={durations} 
                        handleFilters={filters =>
                            handleFilters(filters, "durations")
                        }
                        />
                    </ul>
                    <h4>Filter by Tuition Fee</h4>
            <div>
                <Slider />
            </div>
            </div>

                <div className="col-8">
                <h2 className="mb-4">Courses</h2>
                    <div className="row">
                        {filteredResults.map((course, i) => (
                            <Card key={i} course={course} />
                        ))}
                    </div>
                    <hr />
                    {loadMoreButton()}
                </div>
            </div>
        </Layout>
    );
};

export default Search;
