import './navigation.styles.scss';

import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';

// import { ReactComponent as StarLogo } from '../../assets/star.svg';

import PlanetsDirectory from '../planets-directory/planets-directory.component';
import Icon from '../../assets/star-logo.component';

const Navigation = () => {
    return (
        <Fragment>
            <div className="website-title-bar">
                <Link className="website-title" to="/">
                <Icon />
                <h1>Star Talk Reforged</h1>
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/login">
                        Login
                    </Link>
                    <Link className="nav-link">Signup</Link>
                </div>
            </div>
            <PlanetsDirectory />
            <Outlet />
        </Fragment>
    );
};

export default Navigation;
