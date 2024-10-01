import { Link } from 'react-router-dom';
import './Breadcrum.css'

const Breadcrum = (props) => {
    const {product} = props
    console.log('Product in Breadcrum:', product);
    return (
        <div id='breadcrum' className='d-flex align-items-center'>
            <Link className="btn p-0" to='/k-shop/'>Shop</Link> 
            <i className="fa-solid fa-angles-right fa-fade"></i> 
            <Link to={`/k-shop/${product?.category}`} className='btn p-0' >{product?.category}</Link> 
            <i className="fa-solid fa-angles-right fa-fade"></i> 
            {product?.name}
        </div>
    )
}

export default Breadcrum