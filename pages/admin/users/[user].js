import React, {useEffect, useState} from 'react';
import { userColumns, userRows } from '../../../datatablesource';
import styles from '../../../styles/admin/User.module.css'
import DataTable from "../../../components/admin/DataTable";
import Link from "next/link";
import axios from "axios";
import Image from "next/image";
import {useRouter} from "next/router";
import {Visibility, DeleteOutline} from "@material-ui/icons";
import TableHeader from "../../../components/admin/TableHeader";

const Customers = ({customers}) => {
    const router = useRouter()
    const {user} = router.query
    const [data, setData] = useState([]);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };
  useEffect(()=>{
            setData([])
          customers.map((option)=>{
              console.log('option', option)
              setData( (prev)=>[...prev, {
                  id: option._id,
                  avatar:  option.firstName,
                  firstName: option.firstName,
                  lastName: option.lastName,
                  email: option.personal.email,
                  phone:  option.personal.phone
              }])

          })


  },[user])
    const columns = [

        {field: "avatar", headerName: "Avatar", width: 70,
            renderCell: (params) => {
                return (
                    <div className={styles.avatar}>

                        <div className={styles.avatarText}>
                     {params.row.firstName[0].toUpperCase()}
                            {params.row.lastName[0].toUpperCase()}
                 </div>
                    </div>
                );
            },
        },
        {
            field: "user",
            headerName: "Name",
            width: 230,
            renderCell: (params) => {
                return (
                    <div className={styles.cellWithImg}>

                        <span className={styles.span}>
                     {params.row.firstName} {params.row.lastName}
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
            field: "phone",
            headerName: "Phone",
            width: 200,
        },

        {
            field: "view",
            headerName: "View",
            width: 120,
            renderCell: (params) => {
                return (
                    <div className={styles.cellAction}>
                        <Link href={`/admin/users/${user}/${params.row.id}`} style={{textDecoration: "none"}}>
                            <div className={styles.viewButton}>  <Visibility className={styles.widgetSmIcon} />Display</div>
                        </Link>

                    </div>
                );
            },
        },
        {
            field: "delete",
            headerName: "Delete",
            width: 120,
            renderCell: (params) => {
                return (
                    <div className={styles.cellAction}>

                        <div className={styles.deleteButton}> <DeleteOutline  className={styles.widgetSmIcon}/>Delete</div>
                    </div>
                );
            },
        },
    ];
console.log('data', data)
    return(
        <div className={styles.container}>

            <TableHeader  title={user}  cat={'user'}/>
                <DataTable title={user} rows={data} cat={'user'} columns={columns} pageOption={[10]} pageSize={10}/>




        </div>
    )
};

export default Customers;
Customers.layout = "L2";
export const getServerSideProps = async({params}) => {
    const res = await axios.get(`http://localhost:3000/api/users?group=${params.user}`);

    return{
        props: {
            customers: res.data
        }
    }


};