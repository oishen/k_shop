import { useContext } from 'react'
import './CartItem.css'
import { ShopContext } from '../../Context/ShopContext'

const CartItem = () => {
    const {getTotalCartAmount, all_Product, cartItems, removeFromCart} = useContext(ShopContext)

    return (
        <div className='container-lg mt-5 mb-5'>
            <div id="cartitem" className='mb-5'>
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                {all_Product.map((e)=>{

                if(cartItems[e.id]>0){
                    return(
                        
                        <tbody>
                            <tr>
                                <td>
                                    <img src={e.images[0]} alt="" />
                                </td>
                                <td>{e.name}</td>
                                <td>${e.new_price}</td>
                                <td>{cartItems[e.id]}</td>
                                <td>${e.new_price*cartItems[e.id]}</td>
                                <td>
                                    <a className="btn btn-danger" onClick={()=>{removeFromCart(e.id)}}>
                                        <i class="fa-solid fa-trash"></i>
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    )
                }
            })}
                </table>
            </div>
            <div id="cartitem-down" className='row justify-content-between flex-column-reverse flex-sm-row'>
                <div id="cartitem-total" className='col-sm-5'>
                    <h1>Cart Total</h1>
                    <div>
                        <div id="cartitem-total-item">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div id="cartitem-total-item">
                            <p>Sgipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div id="cartitem-total-item">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div id="cartitems-promocode" className='col-sm-6 mb-5'>
                    <p>If you have a promo code, Enter it here</p>
                    <div id='cartitems-promobox'>
                        <input type="text" name="" id="" placeholder='promo code' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
            
    )
}

export default CartItem