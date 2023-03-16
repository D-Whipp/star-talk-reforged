// Currently not needed
import '../../App.scss';

import Heading from '../../components/heading/heading.component';
import Navigation from '../../components/navigation/navigation.component';
import Topics from '../../components/topics/topics.component';
// DISCUSSIONS COMPONENT IS IMPORTED INTO TOPICS COMPONENT

// import { AiOutlineStar } from 'react-icons/ai';

const Home = () => {
    return (
        <div className="body-container">
            <Heading />
            <Navigation />
            <Topics />
        </div>
    );
};

export default Home;
