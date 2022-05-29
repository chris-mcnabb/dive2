import React from 'react';
import HomeNavbar from "../website/HomeNavbar"
import Footer from "../website/Footer";
import Navbar3 from "../website/Navbar3";


const MainLayout = ({children}) => {

    return (

        <>
            <Navbar3 />
            {children}
            <Footer/>


        </>
    );
};

export default MainLayout;