import styles from '../../styles/admin/New.module.css'
import Image from 'next/image'
import {productInputs} from "../../formSource";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

import {useState} from "react";





const New = () => {
    const [file, setFile] = useState("");

    return (
        <div className={styles.container}>

            <div className={styles.newContainer}>

                <div className={styles.top}>
                    <h1 className={styles.h1}>Add New User</h1>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.left}>
                        <Image width={100} height={100} objectFit='cover'
                            src={
                                file
                                    ? URL.createObjectURL(file)
                                    : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                            }
                            alt=""
                        />
                    </div>
                    <div className={styles.right}>
                        <form className={styles.form}>
                            <div className={styles.formInput}>
                                <label htmlFor="file">
                                    Image: <DriveFolderUploadOutlinedIcon className="icon" />
                                </label>
                                <input
                                    type="file"
                                    id="file"
                                    onChange={(e) => setFile(e.target.files[0])}
                                    style={{ display: "none" }}
                                />
                            </div>
                            {productInputs.map((input) => (
                                <div className={styles.formInput} key={input.id}>
                                    <label className={styles.label}>{input.label}</label>
                                    <input className={styles.input} type={input.type} placeholder={input.placeholder} />
                                </div>
                            ))}
                            <button className={styles.button}>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default New;
New.layout = "L2";
