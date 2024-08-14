    import { useContext, useEffect, useState } from 'react'
    import './Navbar.css'
    import { Link, useLocation } from 'react-router-dom';
    import { ShopContext } from '../../Context/ShopContext';
    const Navbar = () => {

        const [menu, setMenu] = useState('');
        const {getTotalCartItem} = useContext(ShopContext)

        const location = useLocation();
        
        useEffect(() => {
            // Set the active menu based on the current path
            const path = location.pathname;
            if (path.includes('mens')) {
                setMenu('mens');
            } else if (path.includes('womens')) {
                setMenu('womens');
            } else if (path.includes('kids')) {
                setMenu('kids');
            } else if (path.includes('cart')) {
                setMenu('cart');
            } else if (path.includes('login')) {
                setMenu('login');
            } else {
                setMenu('shop');
            }
        }, [location.pathname]);

        return (

            <nav className="navbar navbar-expand-lg p-1">
                <div className="container-lg">
                    <div className="navbar-brand">
                        <img src="../src/Component/Assets/logo.png" alt="" />
                    </div>
                    <div className="d-none d-lg-block">
                        <ul className="navbar-nav gap-5 align-items-center">
                            
                            <li className={`nav-item ${menu === 'shop' ? 'active' : ''}`} onClick={() => setMenu('shop')}>
                                <Link to='/k_shop' className='text-decoration-none text-dark'>
                                    Shop
                                </Link>
                                {menu === "shop" && <hr />}
                            </li>
                            <li className={`nav-item ${menu === 'mens' ? 'active' : ''}`} onClick={() => setMenu('mens')}>
                                <Link to='/k_shop/mens' className='text-decoration-none text-dark'>
                                    Men
                                </Link>
                                {menu === "mens" && <hr />}
                            </li>
                            <li className={`nav-item ${menu === 'womens' ? 'active' : ''}`} onClick={() => setMenu('womens')}>
                                <Link to='/k_shop/womens' className='text-decoration-none text-dark'>
                                    Women
                                </Link>
                                {menu === "womens" && <hr />}
                            </li>
                            <li className={`nav-item ${menu === 'kids' ? 'active' : ''}`} onClick={() => setMenu('kids')}>
                                <Link to='/k_shop/kids' className='text-decoration-none text-dark'>
                                    Kid
                                </Link>
                                {menu === "kids" && <hr />}
                            </li>
                        </ul>
                    </div>

                    <div>
                        <ul className="navbar-nav align-items-center d-flex flex-row gap-3 ">
                            <li className={`nav-item ${menu === 'cart' ? 'active' : ''}`} onClick={() => setMenu('cart')} >
                                <Link to='/k_shop/cart' className='nav-link'>
                                    <i class="fa-solid fa-cart-plus"></i>
                                    <span class="badge bg-danger">{getTotalCartItem()}</span>
                                </Link> 
                            </li>
                            <li className={`nav-item ${menu === 'login' ? 'active' : ''}`} onClick={() => setMenu('login')} >
                                <Link to='/k_shop/login' className='nav-link'>
                                    <button className='btn btn-secondary' >Login</button>
                                </Link>
                            </li>
                            <button class="navbar-toggler" type='button' data-bs-toggle="modal" data-bs-target="#myModal">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                        </ul>
                    </div>
                </div>

                <div class="modal fade" id="myModal">
                    <div class="modal-dialog modal-fullscreen">
                        <div class="modal-content">

                            <div class="modal-header">
                                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                            </div>

                            <div class="modal-body">
                                <ul className="navbar-nav gap-5 align-items-center">
                                    <Link to='/k_shop' className='text-decoration-none text-dark'  >
                                        <li className='nav-item' onClick={()=>{setMenu("shop")}} data-bs-dismiss="modal">Shop{menu==="shop"?<hr/>:<></>}
                                        </li>
                                    </Link>
                                    <Link to='/k_shop/mens' className='text-decoration-none text-dark' >
                                        <li className='nav-item' onClick={()=>{setMenu("mens")}} data-bs-dismiss="modal">Men{menu==="mens"?<hr/>:<></>}
                                        </li>
                                    </Link>
                                    <Link to='/k_shop/womens' className='text-decoration-none text-dark' >
                                        <li className='nav-item' onClick={()=>{setMenu("womens")}} data-bs-dismiss="modal">Women{menu==="womens"?<hr/>:<></>}
                                        </li>
                                    </Link>
                                    <Link to='/k_shop/kids' className='text-decoration-none text-dark' >
                                        <li className='nav-item' onClick={()=>{setMenu("kids")}} data-bs-dismiss="modal">Kid{menu==="kids"?<hr/>:<></>}
                                        </li>
                                    </Link>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
                
            </nav>
        )
    }

    export default Navbar