import './App.scss';

import Heading from './components/heading/heading.component';
import Discussion from './components/discussion/discussion.component';
import Topics from './components/topics/topics.component';

// import { AiOutlineStar } from 'react-icons/ai';

const App = () => {
    return (
        <div className="body-container">
            <Heading />
            <nav>
                <a href="!#">Planet</a>
                <a href="!#">Planet</a>
                <a href="!#">Planet</a>
                <a href="!#">Planet</a>
                <a href="!#">Planet</a>
                <a href="!#">Planet</a>
                <a href="!#">Planet</a>
                <a href="!#">Planet</a>
            </nav>
                <Topics />
        </div>
    );
};

export default App;
