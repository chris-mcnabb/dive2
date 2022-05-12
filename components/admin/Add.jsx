import {useState, useEffect} from 'react';
import styles from "../../styles/admin/Add.module.css"
import axios from "axios";
import {useRouter} from "next/router";
import New from "./New";

const Add = ({setClose, showModal, setShowModal}) => {
    const [file, setFile] = useState(null)
    const [title, setTitle] = useState(null)
    const [categories, setCategories] = useState([])
    const [desc, setDesc] = useState(null)
    const [prices, setPrices] = useState([])
    const [extraPrice, setExtraPrice] = useState({price: []})
    const [extra, setExtra] = useState(null)
    const [extraOptions, setExtraOptions] = useState([])

    const changePrice = (e, index) => {
        const currentPrices = prices;
        currentPrices[index] =  e.target.value;
        setPrices(currentPrices);
    };
    const changeExtraPrice = (e, index) => {
        const currentExtra = extraPrice;
        currentExtra.price[index] = e.target.value;
        setExtraPrice(currentExtra);
        console.log("--->", extraPrice)
    }
    const changeCategory = (e, index) => {
        const currentCategory = categories;
        currentCategory[index] = e.target.value;
        setCategories(currentCategory);
    }

    const handleExtraInput = (e) => {
        e.preventDefault()
        setExtra({...extra, [e.target.name]: e.target.value})
        console.log(extra)
    }
    const handleExtra = (e) => {
        setExtraOptions(prev=>[...prev, {text: extra.text, price: extraPrice.price}])
    }

    const handleCreate = async () => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "uploads");
    try{
       // const uploadRes = await axios.post("https://api.cloudinary.com/v1_1/dansmtlat/image/upload", data)

        //const {url} = uploadRes.data;
        const newProduct = {
           // title, desc, prices, extraOptions, categories, img:url,
        };
            //await axios.post("http://localhost:3000/api/products", newProduct);
            setShowModal(true)
    }catch(err){
        console.log(err)
    }
    }
    console.log("--->", extraOptions)
    return (
        <>
        {showModal && <div className={styles.container}>
        <div className={styles.wrapper}>
              <span onClick={(() => setShowModal(!showModal))} className={styles.close}>
                  X
              </span>
           <New/>
        </div>
    </div>
}
        </>
    );
};

export default Add;
