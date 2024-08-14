import { useContext, useEffect, useState } from 'react'
import './ProductDisplay.css'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
    const {product} = props 

    const {addToCart} = useContext(ShopContext)

    const [selectedImage, setSelectedImage] = useState(product.images[0]);
    

    useEffect(() => {
        setSelectedImage(product.images[0]);
    }, [product]);
    
    return (
        <div id='productdisplay' className='container-lg mt-5 pb-5'>
            <div className="row">
                <div id="productdisplay-left" className='col-sm-5 col-12 gap-1'>
                    <div className="row">
                        <div id="productdisplay-img-list" className='col-2 d-flex flex-column gap-1'>
                             {product.images.map((img, index) => (
                                <img 
                                    key={index} 
                                    src={img} 
                                    alt={`Product thumbnail ${index + 1}`} 
                                    onClick={() => setSelectedImage(img)} 
                                />
                            ))}
                        </div>

                        <div className='col-10'>
                            <img src={selectedImage} alt="" id="productdisplay-main-img" />
                        </div>
                    </div>
                </div>
                <div id="productdisplay-right" className='col-sm-7 mt-5 mt-sm-0'>
                    <h1>{product.name}</h1>
                    <div id="productdisplay-right-star">
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <p>(122)</p>
                    </div>
                    <div id="productdisplay-right-prices">
                        <div id="productdisplay-right-price-old">${product.old_price}</div>
                        <div id="productdisplay-right-price-new">${product.new_price}</div>
                    </div>
                    <div id="productdisplay-right-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur eligendi nemo nulla fugit, qui distinctio non in iste odit eaque illum, culpa officiis repellat, esse impedit voluptatem saepe autem quia.
                    </div>
                    <div id="productdisplay-right-size">
                        <h1>Select size</h1>
                        <form action="" id="productdisplay-right-size-com">
                            {product.size.map((size, i)=>(
                                <div key={i}>
                                    <input type="radio" name="size" id={size} className='d-none'/>
                                    <label for={size}>{size}</label>
                                </div>
                            ))}
                        </form>
                    </div>
                    <button className='btn btn-danger mt-4 mb-4' onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
                    <p id='productdisplay-right-category'><span>Category :</span> {product.category}, T-shirt, Crop Top</p> 
                    <p className='productdisplay-right-category'><span>Tags :</span>Modern, Latest</p>
                </div>
            </div>
        </div>
    )
}

export default ProductDisplay