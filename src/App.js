import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Login from './routes/log-in/login.component';
// import { AiOutlineStar } from 'react-icons/ai';
const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigation />}>
                <Route index element={<Home />} />
                <Route path="login" element={<Login />} />
            </Route>
        </Routes>
    );
};

export default App;
