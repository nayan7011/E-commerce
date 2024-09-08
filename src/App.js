
import './App.css';
import Navbar from './Components/navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import  Shop from './Pages/Shop.jsx';
import ShopCategory from './Pages/ShopCategory.jsx';
import Product from './Pages/Product.jsx';
import Loginsignup from './Pages/Loginsignup.jsx';
import Cart from './Pages/Cart.jsx';
import Footer from './Components/footer/Footer.jsx';
import men_banner from './Components/Assests/banner_mens.png'
import women_banner from './Components/Assests/banner_women.png'
import kids_banner from './Components/Assests/banner_kids.png'
function App() {
  return (
    <div >
   
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/Mens' element={<ShopCategory banner={men_banner} category="men"/>}/>
        <Route path='/Women' element={<ShopCategory banner={women_banner} category="women"/>}/>
        <Route path='/Kids' element={<ShopCategory banner={kids_banner} category="kid"/>}/>
        <Route path='/product' element={<Product />}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Loginsignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
