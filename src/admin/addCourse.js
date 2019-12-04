import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { Link } from "react-router-dom";
import { createCourse } from "./apiAdmin";

const AddCourse = () => {
    const [coursename, setCourseName] = useState("");
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);


    //unfinished
    const [values, setValues] = useState({
        coursename: "",
        cdescription: "",
        entryreq: "",
        level: "",
        duration: "",
        d_tuitionfee: "",
        i_tuitionfee: "",
        providers: [],
        provider: "",

        loading: false,
        error: "",

        createdCourse: "",
      //  redirectToProfile: false,
        formData: "",
    });

    const {
      //  coursename,
        cdescription,
        entryreq,
        level,
        duration,
        d_tuitionfee,
        i_tuitionfee,
        providers,
        provider,
        loading,
     //   error,
        createdCourse,
        formData,
    } = values;

    const handleChange = e => {
        setError("");
        setCourseName(e.target.value);
    };

    const clickSubmit = e => {
        e.preventDefault();
        setError("");
        setSuccess(false);
        // make request to api to create category
        createCourse({ coursename }).then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setError("");
                setSuccess(true);
            }
        });
    };

    const newCategoryFom = () => (
        <form onSubmit={clickSubmit}>
            <div className="form-group">
                <label className="text-muted">Name</label>
                <input
                    type="text"
                    className="form-control"
                    onChange={handleChange}
                    value={coursename}
                    autoFocus
                    required
                />
            </div>
            <button className="btn btn-outline-primary">Create Category</button>
        </form>
    );

    const showSuccess = () => {
        if (success) {
            return <h3 className="text-success">{coursename} is created</h3>;
        }
    };

    const showError = () => {
        if (error) {
            return <h3 className="text-danger">Category should be unique</h3>;
        }
    };

    const goBack = () => (
        <div className="mt-5">
            <Link to="/admin" className="text-warning">
                Back to Dashboard
            </Link>
        </div>
    );

    return (
        <Layout
            title="Add a new category"
            description={`G'day .. ready to add a new Course?`}
        >
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    {showSuccess()}
                    {showError()}
                    {newCategoryFom()}
                    {goBack()}
                </div>
            </div>
        </Layout>
    );
};

export default AddCourse;
