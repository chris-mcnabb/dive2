import React from 'react';

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
