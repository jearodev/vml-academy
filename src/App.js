import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import ProgramInfo from './components/ProgramInfo';
import Courses from './components/Courses';
import RegistrationForm from './components/RegistrationForm';
import Footer from './components/Footer';
import MapComponent from './components/MapComponent';
import Programa1 from './components/programas/Programa1';
import Programa2 from './components/programas/Programa2';
import Programa3 from './components/programas/Programa3';
import Programa4 from './components/programas/Programa4';
import Programa5 from './components/programas/Programa5';
import Programa6 from './components/programas/Programa6';
import Programa7 from './components/programas/Programa7';
import Programa8 from './components/programas/Programa8';
import Programa9 from './components/programas/Programa9';
import Programa10 from './components/programas/Programa10';
import CustomCursor from './components/CustomCursor';
import Cronograma from './components/Cronograma';
import Terminos from './components/Terminos';
import UsersList from './components/UsersList';

function App() {
    return (
        <Router>
            <ScrollToTop />
            <CustomCursor />
            <NavBar />
            <Routes>
                <Route path="/" element={
                    <>
                        <Banner />
                        <ProgramInfo />
                        <MapComponent />
                        <Courses />
                        <RegistrationForm />
                    </>
                } />
                <Route path="/programa1" element={<Programa1 />} />
                <Route path="/programa2" element={<Programa2 />} />
                <Route path="/programa3" element={<Programa3 />} />
                <Route path="/programa4" element={<Programa4 />} />
                <Route path="/programa5" element={<Programa5 />} />
                <Route path="/programa6" element={<Programa6 />} />
                <Route path="/programa7" element={<Programa7 />} />
                <Route path="/programa8" element={<Programa8 />} />
                <Route path="/programa9" element={<Programa9 />} />
                <Route path="/programa10" element={<Programa10 />} />
                <Route path="/cronograma" element={<Cronograma />} />
                <Route path="/terminos" element={<Terminos />} />
                <Route path="/registros" element={<UsersList />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
