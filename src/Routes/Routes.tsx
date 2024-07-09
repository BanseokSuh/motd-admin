import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Main from '../Components/Main';
import About from '../Components/\bAbout';
import Motd from '../Components/Motd';

const RoutesComponent = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/main" element={<Main />} />
            <Route path="/motd" element={<Motd />} />
            <Route path="/about" element={<About />} />
        </Routes>
    );
};

export default RoutesComponent;