import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';
// import { AiOutlineStar } from 'react-icons/ai';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    );
};

export default App;
