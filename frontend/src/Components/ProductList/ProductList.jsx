import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  // Fetch all products
  const getProducts = async () => {
    try {
      let result = await fetch('http://localhost:5000/products');
      result = await result.json();
      setProducts(result);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // Delete a product by ID
  const deleteProduct = async (id) => {
    try {
      let response = await fetch(`http://localhost:5000/product/${id}`, {
        method: "DELETE",
      });
      let result;
      try {
        result = await response.json();
      } catch (err) {
        result = { message: "Non-JSON response from server" };
      }


      if (response.ok) {
        alert("Product deleted successfully");
        getProducts(); // Refresh the product list
      } else {
        alert(result.message || "Error deleting the product");
      }
    } catch (error) {
      console.error("Error deleting the product:", error);
      alert("An error occurred while deleting the product.");
    }
  };


  return (
        <div className="product-list">
            <h3>ProductList</h3>
            <ul>
                <li>S. No</li>
                <li>Name</li>
                <li>Price</li>
                <li>Category</li>
                <li>Operation</li>
            </ul>
            {
                products.map((item, index) =>
                    <ul key={item._id}>
                        <li>{index+1}</li>
                        <li>{item.name}</li>
                        <li>$ {item.price}</li>
                        <li>{item.category}</li>
                        <li><button onClick={()=>deleteProduct(item._id)}>Delete</button></li>
                        <Link to={"/update/"+item._id}>Update</Link>
                    </ul>
                )
            }
        </div>
    )
}

export default ProductList;