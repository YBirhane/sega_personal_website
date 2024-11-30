import React from 'react';
import App from '../App';
import HomePage from '../pages/HomePage';
import ProjectsPage from '../pages/ProjectsPage';
import ResumePage from '../pages/ResumePage';

import { Outlet, Navigate, useRoutes } from 'react-router-dom';

export default function Router(){
    const publicRoutes = [
        {
            element: <App />,
            path: '/',
            children: [
                { element: <HomePage />, path: '/' },
                { element: <ProjectsPage />, path: '/projects'}
            ]
        },
        {
            element: <ResumePage />,
            path: '/resume'
        }
    ]

    const routes = useRoutes(publicRoutes);
    return routes
}