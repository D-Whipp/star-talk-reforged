import './navigation.styles.scss';

import { Outlet } from 'react-router-dom';

import PlanetsDirectory from '../planets-directory/planets-directory.component';

const Navigation = () => {
    return (
        <>
        <div className="website-title-bar">
        <h1>Star Talk Reforged</h1>
        <ul>
        <li>Login</li>
        <li>Signup</li>
        </ul>
        </div>
        <PlanetsDirectory />
        <Outlet />
        </>
    );
};

export default Navigation;
