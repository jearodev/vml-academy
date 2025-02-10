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
import CustomCursor from './components/CustomCursor';
import Equipo from './components/Equipo';
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
                        <Equipo />
                        <MapComponent />
                        <Courses />
                        <RegistrationForm />
                    </>
                } />
                <Route path="/terminos" element={<Terminos />} />
                <Route path="/registros" element={<UsersList />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
