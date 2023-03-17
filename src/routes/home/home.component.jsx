// Currently not needed
import '../../App.scss';

import Navigation from '../navigation/navigation.component';
import Topics from '../../components/topics/topics.component';
// DISCUSSIONS COMPONENT IS IMPORTED INTO TOPICS COMPONENT

// import { AiOutlineStar } from 'react-icons/ai';

const Home = () => {
    return (
        <div className="body-container">
            <Navigation />
            <Topics />
        </div>
    );
};

export default Home;
