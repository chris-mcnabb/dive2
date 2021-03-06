import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useRouter} from "next/router";
import styles from "../../../styles/admin/User.module.css";
import Link from "next/link";
import {DeleteOutline, Visibility} from "@material-ui/icons";
import DataTable from "../../../components/admin/DataTable";
import TableHeader from "../../../components/admin/TableHeader";

const Products = ({products, categories}) => {
    const router = useRouter()
    const [initialMan, setInitialMan] = useState([])
    const [newManufacturer, setNewManufacturer] = useState([])
    const [data, setData] = useState([]);
    const handleClick = () => {

    }
    const handleCat = (e) => {
        router.push(`/admin/products/category/${e.target.value}`)
    }
    const handleMan = (e) => {
        router.push(`/admin/products/manufacturer/${e.target.value}`)
    }

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };
    useEffect(()=>{
        setData([])
        products.map((option)=>{
            setData( (prev)=>[...prev, {
                id: option._id,
                name: option.name,
                manufacturer:  option.manufacturer,
                category: option.categories[0],
                cost: `€${option.cost.toFixed(2)}`,
                price: `€${option.price.toFixed(2)}`,
                inStock: option.inStock,
                new:  option.new
            }])
            setInitialMan((prev)=>[...prev, option.manufacturer])
        })


    },[products])

    useEffect(()=>{
        const list = new Set(initialMan)
        console.log(list)
        setNewManufacturer([...new Set(initialMan)])


        /*const newMans =  products.filter((group)=>group.manufacturer!==products[0].manufacturer)
               console.log(newMans)*/

    },[initialMan])
    const columns = [
        {
            field: "manufacturer",
            headerName: "Manufacturer",
            width: 150,

        },

        {field: "name", headerName: "Name", width: 250,
        },
        {
            field: "category",
            headerName: "Category",
            width: 150,

        },

        {
            field: "cost",
            headerName: "Cost",
            width: 90,
        },

        {
            field: "price",
            headerName: "Price",
            width: 90,
        },
        {
            field: "inStock",
            headerName: "inStock",
            width: 70,
            renderCell: (params) => {
                if(params.row.inStock) {
                    return <div>Ja</div>
                }
                if(!params.row.inStock){
                    return <div>Nee</div>
                }
            },


        },
        {
            field: "new",
            headerName: "New",
            width: 80,
            renderCell: (params) => {
                if(params.row.new) {
                    return <div>Ja</div>
                }
                if(!params.row.new){
                    return <div>Nee</div>
                }
            },


        },
        {
            field: "view",
            headerName: "View",
            width: 150,
            renderCell: (params) => {
                return (
                    <div className={styles.cellAction}>
                        <Link href={`/admin/products/${params.row.category}/${params.row.id}`} style={{textDecoration: "none"}} passHref>
                            <div className={styles.viewButton}>  <Visibility className={styles.widgetSmIcon} />Display</div>
                        </Link>

                    </div>
                );
            },
        },
        {
            field: "delete",
            headerName: "Delete",
            width: 150,
            renderCell: (params) => {
                return (
                    <div className={styles.cellAction}>

                        <div className={styles.deleteButton}> <DeleteOutline  className={styles.widgetSmIcon}/> Delete</div>
                    </div>
                );
            },
        },
    ];

    console.log(newManufacturer)
    return (
        <div className={styles.container}>
            <TableHeader  title={'Products'}  cat={'product'}/>
            <div className={styles.searches}>
                <div className={styles.searchContainer}>
                    <label htmlFor="">View by Category</label>
                    <select name="category" onChange={handleCat}>
                        <option value=""></option>
                        {categories.map((cat)=>(
                            <option key={cat._id}  value={cat.name}>{cat.name}</option>
                        ))}
                    </select>
                </div>
                <div  className={styles.searchContainer}>
                    <label htmlFor="">View by Manufacturer</label>
                    <select name="manufacturer" onChange={handleMan}>
                        <option value=""></option>
                        {newManufacturer.map((product, idx)=>(

                            <option key={idx}  value={product}>{product}</option>
                        ))}
                    </select>
                </div>
            </div>

            <DataTable title={'Products'} rows={data} cat={'product'} columns={columns} pageOption={[10]} pageSize={10}/>

        </div>
    );
};

export default Products;
Products.layout = "L2";
export const getServerSideProps = async() => {

    const res = await axios.get(process.env.VERCEL_URL+`api/products`);
    const cat = await axios.get(process.env.VERCEL_URL+`/api/catmenu`);

    return{
        props: {
            products: res.data,
            categories: cat.data
        }
    }


};
