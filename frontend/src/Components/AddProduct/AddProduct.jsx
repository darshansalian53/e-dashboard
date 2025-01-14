import {useState} from "react";
import './AddProduct.css';


const AddProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [company, setCompany] = useState('');
    const [error, setError]= useState(false)


    const addProduct= async ()=>{
        console.warn(!name);
        if(!name || !price || !category || !company)
        {
            setError(true)
            return false;
        }


        console.warn(name,price,category,company);
        const userId = JSON.parse(localStorage.getItem('user'))._id;
        let result = await fetch("http://localhost:5000/add-product",{
            method:'post',
            body:JSON.stringify({name, price, category, company, userId}),
            headers:{
                "Content-Type":"application/json"
            }
        });
        result= await result.json();
        console.warn(result)
    }

    return (
        <div className="product">
            <h1>AddProduct</h1>
            <form action="">
                <input className="inputbox" type="text" placeholder="Enter product name" 
                value={name} onChange={(e)=>setName(e.target.value)}/>
                {error && !name && <span className="invalid-input">Enter valid name</span>}

                <input className="inputbox" type="text" placeholder="Enter product price" 
                value={price} onChange={(e)=>setPrice(e.target.value)}/>
                {error && !price && <span className="invalid-input">Enter valid price</span>}

                <input className="inputbox" type="text" placeholder="Enter product category" 
                value={category} onChange={(e)=>setCategory(e.target.value)}/>
                {error && !category && <span className="invalid-input">Enter valid category</span>}

                <input className="inputbox" type="text" placeholder="Enter product company" 
                value={company} onChange={(e)=>setCompany(e.target.value)}/>
                {error && !company && <span className="invalid-input">Enter valid company</span>}

                <button onClick={addProduct} className="productbutton">AddProduct</button>
            </form>
        </div>
    )
}

export default AddProduct;