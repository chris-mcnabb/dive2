import React from 'react';
import Navbar from "../website/Navbar"
import Footer from "../website/OtherFooter";
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
