// Currently not needed
import '../../App.scss';

import { Outlet } from 'react-router-dom';

import Navigation from '../navigation/navigation.component';
import Topics from '../../components/topics/topics.component';
// DISCUSSIONS COMPONENT IS IMPORTED INTO TOPICS COMPONENT

// import { AiOutlineStar } from 'react-icons/ai';

const Home = () => {
    // <Navigation />
    return (
        <div>
            <div className="body-container">
                <Topics />
            </div>
            <Outlet />
        </div>
    );
};

export default Home;
