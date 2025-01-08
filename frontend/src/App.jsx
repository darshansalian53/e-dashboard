import './App.css';
import Nav from './Components/Navbar/Nav'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import SignUp from './Components/SignUp/SignUp';
import PrivateComponent from './Components/PrivateComponent';
import Login from './Components/Login/Login';
import AddProduct from './Components/AddProduct/AddProduct';

function App() {


  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          
          <Route element={<PrivateComponent />}>
          <Route path="/" element={<h1>Product Listing Component</h1>}/>
          <Route path="/add" element={<AddProduct />}/>
          <Route path="/update" element={<h1>Update Listing Component</h1>}/>
          <Route path="/logout" element={<h1>Logout Component</h1>}/>
          <Route path="/profile" element={<h1>Profile Component</h1>}/>
          </Route>

          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/login" element={<Login />}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;