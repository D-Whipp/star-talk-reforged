import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';
// import { AiOutlineStar } from 'react-icons/ai';

const Login = () => {
    return (
        <h1 style={{ color: 'white' }}>
            Hello Seattle! Login is listening...
        </h1>
    );
};

const App = () => {
    return (
        <Routes>
            <Route path="/home" element={<Home />}>
                <Route path="login" element={<Login />} />
            </Route>
        </Routes>
    );
};

export default App;
