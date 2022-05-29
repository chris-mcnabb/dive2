import styles from '../../../styles/admin/New.module.css'
import Image from 'next/image'
import {productInputs} from "../../../formSource";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import {useState} from "react";

import {useRouter} from "next/router";
import ProductInput from "../../../components/admin/ProductInput";
import axios from "axios";
import NewSale from "../../../components/admin/NewSale";
import {AttachMoney} from "@mui/icons-material";
import NewUser from "../../../components/admin/NewUser";
import useToggle from "../../../components/hooks/useToggle";
import Rental from "../../../components/admin/Rental";



const New = ({category, users, agency}) => {

    const router = useRouter()
    const {id} = router.query
    const [success, setSuccess] = useToggle()
    const handleCreate =  async (data) => {
       console.log(data)
        try{
                const res = await axios.post(`http://localhost:3000/api/${id+'s'}`, data);
                console.log(res)
                    res.statusText && setSuccess(true)
        }catch(err){
            console.log(err)
        }
    }
    console.log(id)
    return (
        <div className={styles.container}>
            <div className={styles.newContainer}>
                {id==='product' && <ProductInput  id={id} handleCreate={handleCreate} category={category}
                />}
                {id==='rental' && <Rental  id={id} handleCreate={handleCreate} category={category}
                />}
                {id==='sale' &&
                <NewSale users={users}/>}
                {id==='user' &&
                    <NewUser  id={id} agency={agency} handleCreate={handleCreate} success={success} setSuccess={setSuccess}/>}

            </div>
        </div>
    );
};


export default New;
New.layout = "L2";

    export const getServerSideProps = async() => {

            const cat = await axios.get("http://localhost:3000/api/catmenu");
            const user = await axios.get("http://localhost:3000/api/users");
            const cert = await axios.get("http://localhost:3000/api/agency");
            return{
                props:{
                    category: cat.data,
                    users: user.data,
                    agency: cert.data

                }
            }

    }
