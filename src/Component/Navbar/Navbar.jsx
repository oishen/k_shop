    import { useContext, useEffect, useState } from 'react'
    import './Navbar.css'
    import { Link, useLocation } from 'react-router-dom';
    import { ShopContext } from '../../Context/ShopContext';
    import logo from '../Assets/logo.png'

    const Navbar = () => {

        const [menu, setMenu] = useState('shop');
        const {getTotalCartItem} = useContext(ShopContext)

        return (

            <nav className="navbar navbar-expand-lg p-0" style={{height: '50px'}} id='navbar'>
                <div className="container-lg">
                    <img src={logo} alt="" className='navbar-brand' />
                    <div className="d-none d-lg-block">
                        <ul className="navbar-nav gap-5">

                            <li className="nav-item">
                                <Link to='/k-shop/' className={`nav-link ${menu === 'shop' ? 'active' : ''}`} onClick={()=>setMenu('shop')} >Shop</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/k-shop/mens' className={`nav-link ${menu === 'mens' ? 'active' : ''}`} onClick={()=>setMenu('mens')} >Mens</Link>
                            </li>
                             <li className="nav-item">
                                <Link to='/k-shop/womens' className={`nav-link ${menu === 'womens' ? 'active' : ''}`} onClick={()=>setMenu('womens')} >Womens</Link>
                            </li>
                             <li className="nav-item">
                                <Link to='/k-shop/kids' className={`nav-link ${menu === 'kids' ? 'active' : ''}`} onClick={()=>setMenu('kids')} >Kids</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <ul className="navbar-nav align-items-center d-flex flex-row gap-3 ">
                            <li className={`nav-item ${menu === 'cart' ? 'active' : ''}`} onClick={() => setMenu('cart')} >
                                <Link to='/k-shop/cart' className='nav-link'>
                                    <i className="fa-solid fa-cart-plus"></i>
                                    <span className="badge bg-danger">{getTotalCartItem()}</span>
                                </Link> 
                            </li>
                            <li className={`nav-item ${menu === 'login' ? 'active' : ''}`} onClick={() => setMenu('login')} >
                                <Link to='/k-shop/login' className='nav-link'>
                                    <button className='btn btn-warning' >Login</button>
                                </Link>
                            </li>
                            <button className="navbar-toggler btn border-0" type='button' data-bs-toggle="modal" data-bs-target="#myModal">
                                <span className="navbar-toggler-icon" style={{width: '25px'}}></span>
                            </button>
                        </ul>
                    </div>
                </div>

                <div className="modal fade" id="myModal">
                    <div className="modal-dialog modal-fullscreen">
                        <div className="modal-content">

                            <div className="modal-header">
                                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                            </div>

                            <div className="modal-body">
                                <ul className="navbar-nav gap-3 align-items-center">
                                    <Link to='/k-shop/k_shop' className='text-decoration-none text-dark'  >
                                        <li className='nav-item' onClick={()=>{setMenu("shop")}} data-bs-dismiss="modal">Shop{menu==="shop"?<hr/>:<></>}
                                        </li>
                                    </Link>
                                    <Link to='/k-shop/mens' className='text-decoration-none text-dark' >
                                        <li className='nav-item' onClick={()=>{setMenu("mens")}} data-bs-dismiss="modal">Men{menu==="mens"?<hr/>:<></>}
                                        </li>
                                    </Link>
                                    <Link to='/k-shop/womens' className='text-decoration-none text-dark' >
                                        <li className='nav-item' onClick={()=>{setMenu("womens")}} data-bs-dismiss="modal">Women{menu==="womens"?<hr/>:<></>}
                                        </li>
                                    </Link>
                                    <Link to='/k-shop/kids' className='text-decoration-none text-dark' >
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