import './Offer.css'
import exclusive_image from '../Assets/pic5.JPG'

const Offer = () => {
    return (
        <div id="offer">
            <div className="container-lg">
                <div className="row align-items-center">
                    <div id="offer-left" className='col-6'>
                        <h2 className='h2'>Exclusive</h2>
                        <h2>Offers For You</h2>
                        <p>ONLY ON BEST SELLERS PRODUCTS</p>
                        <button className='btn btn-danger rounded-pill ps-sm-5 pe-sm-5 p-sm-2 ps-3 pe-3'>Check Now</button>
                    </div>

                    <div id="offer-right" className='col-6 justify-content-end d-flex'>
                        <img src={exclusive_image} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Offer