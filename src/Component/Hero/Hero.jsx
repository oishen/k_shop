import "./Hero.css"
import hero_banner from "../Assets/hero_banner.png"

const Hero = () => {
    return (
        <div id="hero">
            <img src={hero_banner} className="w-100" alt="" />
        </div>
    )
}

export default Hero