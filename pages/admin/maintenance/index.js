import styles from '../../../styles/admin/Maintenance.module.css'
import Image from 'next/image'
import axios from "axios";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import {useState} from "react";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from '../../../lib/firebase'
import UploadImage from "../../../components/admin/UploadImage";




const Maintenance = () => {
const [file, setFile] = useState('')
    const [img, setImg] = useState('')
console.log(img)

    return (
       <>
          <UploadImage file={file} setFile={setFile} img={img} setImg={setImg}/>
       </>
    );
};


export default Maintenance;
Maintenance.layout = "L2";

