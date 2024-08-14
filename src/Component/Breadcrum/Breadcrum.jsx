import './Breadcrum.css'

const Breadcrum = (props) => {
    const {product} = props
    console.log('Product in Breadcrum:', product);
    return (
        <div id='breadcrum'>
            HOME <i className="fa-solid fa-angles-right"></i> SHOP <i className="fa-solid fa-angles-right"></i> {product?.category} <i className="fa-solid fa-angles-right"></i> {product?.name}
        </div>
    )
}

export default Breadcrum