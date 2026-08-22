import { memo } from "react";
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from "../components/Home";
import { ProfileDetail } from "../components/ProfileDetail";
import { ProjectsDetail } from "../components/ProjectsDetail";

export const Router = memo(() => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/ProfileDetail" element={<ProfileDetail />} />
                    <Route path="/ProjectsDetail/:id" element={<ProjectsDetail />} />
                </Routes>
            </BrowserRouter>
        </>
    );
});