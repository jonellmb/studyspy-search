import React from "react";
import Layout from "../core/Layout";
import { Link } from "react-router-dom";

const courseLinks = () => {
    return (
        <div className="card">
            <h4 className="card-header">Course Links</h4>
            <ul className="list-group">
                <li className="list-group-item">
                    <Link className="nav-link" to="/admin/course/add">
                        Create Course
                    </Link>
                </li>
                <li className="list-group-item">
                    <Link className="nav-link" to="/view/course">
                        View Course
                    </Link>
                </li>
            </ul>
        </div>
    );
};

const providerLinks = () => {
    return (
        <div className="card">
            <h4 className="card-header">Provider Links</h4>
            <ul className="list-group">
                <li className="list-group-item">
                    <Link className="nav-link" to="/create/provider">
                        Create Provider
                    </Link>
                </li>
                <li className="list-group-item">
                    <Link className="nav-link" to="/view/providers">
                        View Providers
                    </Link>
                </li>
            </ul>
        </div>
    );
};

const DashBoard = () => (
    <Layout title="Admin Dashboard" description="add course? or review providers?"  className="container-fluid">    
            <div className="row">
                <div className="col-3">{courseLinks()}</div>
                <div className="col-9">{providerLinks()}</div>
            </div>
    </Layout>

);

export default DashBoard;
