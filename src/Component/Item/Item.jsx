import { Link } from "react-router-dom"
import "./Item.css"

const Item = (props) => {
    return (
        <div id="item" className="col-sm-3 col-4 justify-content-center d-flex">
            <div>
                <div id="divImg">
                    <Link to={`/k_shop/product/${props.id}`}>
                        <img src={props.image} alt="" onClick={window.scroll(0,0)} />
                        {/* <img src={props.image} alt="" /> */}
                    </Link>
                </div>
                <p>{props.name}</p>
                <div className="d-flex gap-3">
                    <div id="item-price-new">
                        ${props.new_price}
                    </div>
                    <div id="item-price-old">
                        ${props.old_price}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item