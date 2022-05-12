import {useState} from 'react';
import { userColumns, userRows } from '../../../datatablesource';
import styles from '../../styles/admin/User.module.css'
import DataTable from "../../../components/DataTable";
import Link from "next/link";
import axios from "axios";
import Image from "next/image";

const Customers = ({customers}) => {


    const [data, setData] = useState(userRows);
    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    const columns = [

            {field: "id", headerName: "ID", width: 70},
            {
                field: "user",
                headerName: "User",
                width: 230,
                renderCell: (params) => {
                    return (
                        <div className={styles.cellWithImg}>
                            <Image className={styles.cellImg} src={params.row.img} height={32} width={32} alt="avatar"/>
                            <span className={styles.span}>
                     {params.row.username}
                 </span>
                        </div>
                    );
                },
            },
            {
                field: "email",
                headerName: "Email",
                width: 230,
            },

            {
                field: "age",
                headerName: "Age",
                width: 100,
            },
            {
                field: "status",
                headerName: "Status",
                width: 160,
                renderCell: (params) => {
                    return (
                        <div className={`cellWithStatus ${params.row.status}`}>
                            {params.row.status}
                        </div>
                    );
                },
            },
            {
                field: "action",
                headerName: "Action",
                width: 200,
                renderCell: (params) => {
                    return (
                        <div className={styles.cellAction}>
                            <Link href="/admin/new/customer" style={{textDecoration: "none"}}>
                                <div className={styles.viewButton}>View</div>
                            </Link>
                            <div
                                className={styles.deleteButton}
                                onClick={() => handleDelete(params.row.id)}
                            >
                                Delete
                            </div>
                        </div>
                    );
                },
            },
        ];

    return (
        <div className={styles.container}>

                <DataTable title={title} data={data} columns={columns}/>



        </div>
    );
};

export default Customers;
Customers.layout = "L2";
export const getServerSideProps = async() => {
    const res = await axios.get("http://localhost:3000/api/auth");

            return{
                props: {
                    customers: res.data
                }
            }


};
