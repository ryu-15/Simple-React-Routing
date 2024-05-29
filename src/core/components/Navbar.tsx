import { Link, Outlet } from "react-router-dom";
import React, { useState } from "react";

export const Navbar: React.FunctionComponent = () => {
    const [dynamicValue, setDynamicValue] = useState('');

    const handleChangeDynamicValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDynamicValue(event.target.value);
    };

    return (
        <div>
            <ul>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/about">Dynamic about</Link>
                </li>
                <li>
                    <input
                        type="text"
                        value={dynamicValue}
                        onChange={handleChangeDynamicValue}
                        placeholder="Enter feature ID"
                    />
                </li>
                <li>
                    <Link to={`/features/${dynamicValue}`}>
                        Dynamic Features {dynamicValue}
                    </Link>
                </li>
                <li>
                    <Link to="/courses">Courses</Link>
                </li>
                <li>
                    <Link to="/staticAbout">Static About</Link>
                </li>
            </ul>
            <Outlet/>
        </div>
    );
};
