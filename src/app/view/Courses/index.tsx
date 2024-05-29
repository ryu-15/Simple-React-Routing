import React from "react";
import {Link, Outlet} from "react-router-dom";
  const Courses: React.FunctionComponent = () => {
    return (
        <>
        Courses page
            <ul>
                <li>
                    <Link to="/courses/bca">BCA</Link>
                </li>
                <li>
                    <Link to="/courses/bph">BPH</Link>
                </li>
                <li>
                    <Link to="/courses/bba">BBA</Link>
                </li>
            </ul>

            <Outlet />
        </>
    );
};
export default Courses;