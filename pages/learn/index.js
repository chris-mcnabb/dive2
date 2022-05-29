import React from 'react';
import AdminHome from "../admin";
import Contact from "../../components/website/overons/Contact";
import axios from "axios";

const Learn = ({image}) => {
    return (
        <div>
            <Contact image={image}/>
        </div>
    );
};

export default Learn;
Learn.layout = "L3";
export const getServerSideProps = async () => {
    const img = await axios.get(`http://localhost:3000/api/images`);

    return{
        props: {
            image: img.data
        }
    }
}
