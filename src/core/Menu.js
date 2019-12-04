import React from "react";
import { Link, withRouter } from "react-router-dom";

const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return { color: "#787878" };
    } else {
        return { color: "#000" };
    }
};

const Menu = ({ history }) => (
    <div>
        <ul className="nav nav-tabs bg-muted">
            <li className="nav-item">
                <Link
                    className="nav-link"
                    style={isActive(history, "/")}
                    to="/"
                >
                    Home
                </Link>
            </li>

            <li className="nav-item">
                <Link
                    className="nav-link"
                    style={isActive(history, "/admin")}
                    to="/admin"
                >
                    Admin
                </Link>
            </li>

        </ul>
    </div>
);

export default withRouter(Menu);
