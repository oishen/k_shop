import { useContext } from "react"
import "./css/ShopCategory.css"
import {ShopContext} from "../Context/ShopContext"
import Item from '../Component/Item/Item'

const ShopCategory = (props) => {
    const {all_Product} = useContext(ShopContext)
    
    return (
        <div id="shopcategory">
            <img src={props.banner} alt="" id="shopcategory-banner" />
            <div className="container-lg">
                <p className="mt-3 mb-5" id="pText">
                    <span>Showing 1-12</span>
                </p>
                <div className="mt-5 row row-gap-5">
                    {all_Product.map((item, i)=>{
                        if(props.category===item.category){
                            return <Item key={i} id={item.id} name={item.name} image={item.images[0]} new_price={item.new_price} old_price={item.old_price} />
                            
                        } else{
                            return null
                        }
                    })}
                </div>
                <div id="shopcategory-loadmore">
                    Explorer More
                </div>
            </div>
        </div>
    )
}

export default ShopCategory