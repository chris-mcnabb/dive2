import styles from '../../styles/admin/New.module.css'
import React, {useState} from "react";
import Image from "next/image";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import {AttachMoney} from "@mui/icons-material";


const ProductInput = ({ id, handleCreate, category }) => {

    const [cat, setCat] = useState({})
    const [color, setColor] = useState('')
    const [size, setSize] = useState('')
    const [code, setCode] = useState('')
    const [inputs, setInputs] = useState({});
    const [categories, setCategories] = useState('')
    const [subCategories, setSubCategories] = useState([])
    const [colors, setColors] = useState([])
    const [sizes, setSizes] = useState([])
    const [codes, setCodes] = useState([])
    const [file, setFile] = useState([])
    const [catIndex, setCatIndex] = useState('')


    const handleCat = (e) => {

        //setCategories(prev=>[...prev, cat])
        setCat({[e.target.name]: e.target.value})
       setCatIndex(category.findIndex(item=> item.name === e.target.value))
    };
    const changeColor = (e) => {
        e.preventDefault()
        setColors(prev=>[...prev, color])
        setColor('')
    };
    const changeSize = (e) => {
        e.preventDefault()
        setSizes(prev=>[...prev, size])
        setSize('')
    };
    const changeCode = (e) => {
        e.preventDefault()
        setCodes(prev=>[...prev, code])
        setCode('')
    };
    const handleChange = (e) => {

        setInputs(prev=>{
            return {...prev, [e.target.name]: e.target.value}
        })
    };
    const handleSub = (e, sub) => {

        const{checked}= e.target
        if(checked){
            setSubCategories(prev=>[...prev, sub])
        }if(!checked){
            setSubCategories(subCategories.filter((item, index)=>subCategories[index] !== sub))
        }


    };

console.log(file)
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <h1 className={styles.h1}>
                Add Product
                </h1>
            </div>

                <div className={styles.bottom}>
                    <div className={styles.left}>
                        <Image width={100} height={100} objectFit='cover'
                               className={styles.img}
                               src={

                                      "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                               }
                               alt=""
                        />
                        <div className={styles.imgInput}>

                            <label htmlFor="file" className={styles.iconContainer}>
                                Upload Image: <DriveFolderUploadOutlinedIcon className={styles.icon} />
                            </label>
                            <input
                                type="file"
                                id="file"
                                onChange={(e) => setFile(prev=> [...prev, e.target.files[0].name])}
                                style={{ display: "none"}}
                            />

                            <div className={styles.buttonContainer}>
                                {id && <button className={styles.button} onClick={()=>handleCreate({
                                    ...inputs, subCategories: subCategories, categories, color: colors, barcode: codes, size: sizes, img: file
                                })}>CREATE
                                    NEW {id.toUpperCase()}</button>}
                            </div>

                        </div>
                        <div className={styles.list}>
                            <ul className={styles.ul}>
                                {inputs.manufacturer?.length > 0 && <li  className={styles.li}><b>Manufacturer:</b> {inputs.manufacturer}</li>}
                                {inputs.name?.length > 0 && <li  className={styles.li}><b>Name:</b> {inputs.name}</li>}
                                {inputs.modelId?.length > 0 && <li  className={styles.li}><b>Model Id:</b> {inputs.modelId}</li>}
                                {inputs.cost?.length > 0 && <li  className={styles.li}><b>Cost:</b> €{inputs.cost}</li>}
                                {inputs.price?.length > 0 && <li  className={styles.li}><b>Price:</b> €{inputs.price}</li>}
                                {inputs.desc?.length > 0 && <li  className={styles.li}><b>Description:</b> {inputs.desc}</li>}
                                {cat.categories?.length > 0 &&  (<li  className={styles.li}><b>Categories:</b> {cat.categories}</li>
                                )}
                                {colors?.length > 0 && (<li  className={styles.li}><b>Colors:</b> {colors.map((cat, ind)=>(
                                        <span key={ind}> {cat},</span>
                                    ))}</li>
                                )}
                                {sizes?.length > 0 && (<li  className={styles.li}><b>Sizes:</b> {sizes.map((cat, ind)=>(
                                        <span key={ind}> {cat},</span>
                                    ))}</li>
                                )}
                                {codes?.length > 0 && (<li  className={styles.li}><b>Barcodes:</b> {codes.map((cat, ind)=>(
                                        <span key={ind}> {cat},</span>
                                    ))}</li>
                                )}
                                {inputs.gender?.length > 0 && <li  className={styles.li}><b>Gender:</b> {inputs.gender}</li>}
                                {inputs.stock?.length > 0 && <li  className={styles.li}><b>Stock:</b> {inputs.stock}</li>}
                                {inputs.new?.length > 0 && <li  className={styles.li}><b>New:</b> {inputs.new}</li>}


                            </ul>
                        </div>
                    </div>
        <div className={styles.right}>
        <form className={styles.form}>
            <div className={styles.formInput}>
                <label className={styles.label}>
                    Manufacturer
                </label>
                <input className={styles.input}
                    type='text'
                       name='manufacturer'
                       placeholder='Aqua Lung'
                       onChange={handleChange}
                />
            </div>
            <div className={styles.formInput}>
                <label className={styles.label}>
                    Product Name
                </label>
                <input className={styles.input}
                    type='text'
                       name='name'
                       placeholder='Product Name'
                       onChange={handleChange}
                />
            </div>
            <div className={styles.formInput}>
                <label className={styles.label}>
                    Model Id
                </label>
                <input className={styles.input}
                    type='text'
                       name='modelId'

                       placeholder='12345'
                       onChange={handleChange}
                />
            </div>
            <div className={styles.formInput}>
                <label className={styles.label}>
                    Cost
                </label>
                <input className={styles.input}
                    type='text'
                       name='cost'
                       placeholder='100'
                       onChange={handleChange}
                />
            </div>
            <div className={styles.formInput}>
                <label className={styles.label}>
                    Price
                </label>
                <input className={styles.input}
                    type='text'
                       name='price'

                       placeholder='100'
                       onChange={handleChange}
                />
            </div>
            <div className={styles.formInput}>
                <label className={styles.label}>
                    Description
                </label>
                <input className={styles.input}
                    type='text'
                       name='desc'

                       placeholder='Description'
                       onChange={handleChange}
                />
            </div>
            <div className={styles.formInput}>
                <label className={styles.label}>
                    Category
                </label>
                <div className={styles.select}>
                    <select name="categories" onChange={handleCat}>
                        <option value=""></option>
                        {category.map((cat)=>(
                            <option key={cat._id}  value={cat.name}>{cat.name}</option>
                        ))}
                    </select>
                    {cat.categories !==undefined &&(
                        <>
                            <label className={styles.subLabel}>SubCategory</label>
                            <div  className={styles.checks}>
                            {category[catIndex]?.subCategories.map((sub, idx)=>(
                                <div key={idx}>
                                   <input
                                       onChange={(e)=>handleSub(e, sub)}
                                       className={styles.check}
                                       type="checkbox"
                                       id={sub}
                                       name={sub}
                                   />
                                   <label className={styles.subCat}>{sub}</label>
                               </div>
                            ))}
                            </div>
                        </>



                    )}
                </div>
            </div>
            <div className={styles.formInput}>
                <label className={styles.label}>
                    Color
                </label>
                <input className={styles.input}
                    type='text'
                       name='color'
                       value={color}
                       placeholder='Ocean Blue'
                       onChange={(e) =>setColor(e.target.value)}
                />
                <button className={styles.labelButton} onClick={changeColor}>Add Color</button>
            </div>
            <div className={styles.formInput}>
                <label className={styles.label}>
                    Size
                </label>
                <input className={styles.input}
                    type='text'
                       name='size'
                       value={size}
                       placeholder='Large'
                       onChange={(e) =>setSize(e.target.value)}
                />
                <button className={styles.labelButton} onClick={changeSize}>Add Size</button>
            </div>
            <div className={styles.formInput}>
                <label className={styles.label}>
                    Barcode
                </label>
                <input className={styles.input}
                    type='text'
                       name='barcode'
                       value={code}
                       placeholder='88888888888'
                       onChange={(e) =>setCode(e.target.value)}
                />
                <button className={styles.labelButton} onClick={changeCode}>Add Barcode</button>
            </div>
            <div className={styles.formInput}>
                <label className={styles.label}>
                    Gender
                </label>
                <input className={styles.input}
                       type='text'
                       name='gender'

                       placeholder='Male'
                />
            </div>
            <div className={styles.formInput}>
                <label className={styles.label}>
                    Stock
                </label>
                <input
                    className={styles.input}
                    type='text'
                    name='stock'

                    placeholder='500'
                    onChange={handleChange}
                />
            </div>
            <div className={styles.formInput}>
                <label className={styles.label}>
                    New
                </label>
                <div className={styles.select}>
                <select name="New" onChange={handleChange}>
                    <option value=""></option>
                    <option value="false">Nee</option>
                    <option value="true">Ja</option>
                </select>
                </div>
            </div>
        </form>
        </div>
</div>
        </div>
    );
};

export default ProductInput;
