import "./Hero.css"
import hand_icon from "../Assets/hand_icon.png"
import arrow_icon from "../Assets/arrow_icon.png"
import hero_image from "../Assets/hero_image.png"

const Hero = () => {
    return (
        <div id="hero">
            <div className="container-lg">
                <div className="row pt-5 pb-5">
                    <div id="hero-left" className="col-6">
                        <h2 className="h2">NEW ARRIVAL ONLY</h2>
                        <div>
                            <div id="hand-hand-icon" className="d-flex align-items-center gap-3">
                                <p>new</p>
                                <img src={hand_icon} alt="" id="img" />
                            </div>
                            <p>Collections</p>
                            <p>For everyone</p>
                        </div>
                        <a href="" className="btn btn-danger rounded-pill text-light ps-md-5 pe-md-5 p-2 ps-1 pe-1" id="hero-btn">
                            Latest Collection
                            <img src={arrow_icon} alt="" className="ms-2" />
                        </a>
                    </div>

                    <div id="hero-right" className="col-6">
                        <img src={hero_image} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero