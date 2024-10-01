import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./Component/Navbar/Navbar"
import Shop from "./Pages/Shop"
import ShopCategory from "./Pages/ShopCategory"
import Product from "./Pages/Product"
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup'
import men_banner from './Component/Assets/men_banner.jpg'
import women_banner from './Component/Assets/women_banner.jpg'
import kid_banner from './Component/Assets/kid_banner.jpg'
import Footer from "./Component/Footer/Footer"
import Breadcrum from "./Component/Breadcrum/Breadcrum"

const App = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/k-shop/" element={<Shop/>} />
                <Route path="/k-shop/mens" element={<ShopCategory category="mens" banner={men_banner}/>} />
                <Route path="/k-shop/womens" element={<ShopCategory category="womens" banner={women_banner}/>} />
                <Route path="/k-shop/kids" element={<ShopCategory category="kids" banner={kid_banner}/>} />
                <Route path="/k-shop/product" element={<Product/>} >
                    <Route path=":productId" element={<Product/>}/>
                </Route>
                <Route path="/k-shop/cart" element={<Cart/>}/>
                <Route path="/k-shop/login" element={<LoginSignup/>} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default App