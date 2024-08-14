import './RelatedProduct.css'
import all_product from '../Assets/all_Product'
import Item from '../Item/Item'

const RelatedProduct = () => {

    return (
        <div id='relatedproduct' className='mt-5 mb-5 container-lg'>
            <h1>Related Products</h1>
            <div id="line" className='m-auto'> </div>
            <div id="relatedproduct-item" className='mt-5 row row-gap-5'>
                {all_product.map((item, i)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.images[0]} new_price={item.new_price} old_price={item.old_price} />
                })}
            </div>
        </div>
    )
}

export default RelatedProduct