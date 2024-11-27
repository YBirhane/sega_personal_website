import React from 'react';
import App from '../App'
import HomePage from '../pages/HomePage'
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

export default function Router(){
    const publicRoutes = [
        {
            element: <App />,
            path: '/',
            children: [
                { element: <HomePage />, path: '/' },
            ]
        }
    ]

    const routes = useRoutes(publicRoutes);
    return routes
}