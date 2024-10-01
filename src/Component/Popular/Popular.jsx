import { useState } from "react"
import all_Product from "../Assets/all_Product"
import Item from "../Item/Item"
import "./Popular.css"

const Popular = () => {

    const [category, setCategory] = useState('womens');

    const filter = all_Product.filter((f)=>
        category ? f.category == "womens" : true
    )

    return (
        <div id="popular" className="container-lg mt-5 mb-5">
            <h2 className="h2 text-center">POPULAR IN WOMEN</h2>
            <div id="line" className="m-auto "> </div>
            <div className="row mt-5">
                {filter.map((item, i) => {
                    return <Item key={i} id={item.id} name={item.name} image={item.images[0]} new_price={item.new_price} old_price={item.old_price} />
                } )}
            </div>
        </div>
    )
}

export default Popular