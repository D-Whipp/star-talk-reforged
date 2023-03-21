// Currently not needed
import '../../App.scss';

import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import Topics from '../../components/topics/topics.component';
// DISCUSSIONS COMPONENT IS IMPORTED INSIDE OF TOPICS COMPONENT

// import { AiOutlineStar } from 'react-icons/ai';

const Home = () => {
    return (
        <Fragment>
            <div className="body-container">
                <Topics />
            </div>
            <Outlet />
        </Fragment>
    );
};

export default Home;
