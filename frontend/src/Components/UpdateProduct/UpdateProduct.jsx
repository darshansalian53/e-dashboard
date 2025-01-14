import {useState} from "react";
import './UpdateProduct.css';


const UpdateProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [company, setCompany] = useState('');


    const updateProduct= async ()=>{
        console.warn(name, price, category, company)

    }

    return (
        <div className="product">
            <h1>Update Product</h1>
            <form action="">
                <input className="inputbox" type="text" placeholder="Enter product name" 
                value={name} onChange={(e)=>setName(e.target.value)}/>
            

                <input className="inputbox" type="text" placeholder="Enter product price" 
                value={price} onChange={(e)=>setPrice(e.target.value)}/>
            

                <input className="inputbox" type="text" placeholder="Enter product category" 
                value={category} onChange={(e)=>setCategory(e.target.value)}/>
                

                <input className="inputbox" type="text" placeholder="Enter product company" 
                value={company} onChange={(e)=>setCompany(e.target.value)}/>
                

                <button onClick={updateProduct} className="productbutton">Update Product</button>
            </form>
        </div>
    )
} 

export default UpdateProduct;