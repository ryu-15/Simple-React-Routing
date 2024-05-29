import React, { Suspense } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import AboutDummy from "../app/view/AboutDummy";

const Home = React.lazy(() => import("../app/view/Home"));
const About = React.lazy(() => import("../app/view/About"));
const Features = React.lazy(() => import("../app/view/Features"));
const Courses = React.lazy(() => import("../app/view/Courses"));
const BCA = React.lazy(() => import("../core/components/BCA"));
const BBA = React.lazy(() => import("../core/components/BBA"));
const BPH = React.lazy(() => import("../core/components/BPH"));
const Layout = React.lazy(() => import("../app/Layout"));

export const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Suspense fallback={<div>Loading...</div>}>
                <Layout />
            </Suspense>
        ),
        children: [
            {
                index: true,
                element: <Navigate to="home" />,
            },
            {
                path: "home",
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <Home />
                    </Suspense>
                ),
            },
            {
                path: "about",
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <About />
                    </Suspense>
                ),
            },
            {
                path: "staticAbout",
                element: (
                        <AboutDummy />
                ),
            },
            {
                path: "features/:featuresId",
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <Features />
                    </Suspense>
                ),
            },
            {
                path: "courses",
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <Courses />
                    </Suspense>
                ),
                children: [
                    {
                        index: true,
                        element: <Navigate to="bca" />,
                    },
                    {
                        path: "bca",
                        element: (
                            <Suspense fallback={<div>Loading...</div>}>
                                <BCA />
                            </Suspense>
                        ),
                    },
                    {
                        path: "bba",
                        element: (
                            <Suspense fallback={<div>Loading...</div>}>
                                <BBA />
                            </Suspense>
                        ),
                    },
                    {
                        path: "bph",
                        element: (
                            <Suspense fallback={<div>Loading...</div>}>
                                <BPH />
                            </Suspense>
                        ),
                    },
                ],
            },
        ],
    },
]);
