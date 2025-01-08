import React from "react";
import './AddProduct.css';


const AddProduct = () => {
    const [name, setName] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [category, setCategory] = React.useState('');
    const [company, setCompany] = React.useState('');
    const addProduct=()=>{
        console.warn(name,price,category,company);
    }

    return (
        <div className="product">
            <h1>AddProduct</h1>
            <form action="">
                <input className="inputbox" type="text" placeholder="Enter product name" 
                value={name} onChange={(e)=>{setName(e.target.value)}}/>

                <input className="inputbox" type="text" placeholder="Enter product price" 
                value={price} onChange={(e)=>{setPrice(e.target.value)}}/>

                <input className="inputbox" type="text" placeholder="Enter product category" 
                value={category} onChange={(e)=>{setCategory(e.target.value)}}/>

                <input className="inputbox" type="text" placeholder="Enter product company" 
                value={company} onChange={(e)=>{setCompany(e.target.value)}}/>

                <button onClick={addProduct} className="productbutton">AddProduct</button>
            </form>
        </div>
    )
}

export default AddProduct;