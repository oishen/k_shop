import Hero from "../Component/Hero/Hero"
import NewCollection from "../Component/NewCollection/NewCollection"
import NewLetter from "../Component/NewLetter/NewLetter"
import Offer from "../Component/Offers/Offer"
import Popular from "../Component/Popular/Popular"

const Shop = () => {
    return (
        <div>
            <Hero/>
            <Popular/>
            <Offer/>
            <NewCollection/>
            <NewLetter/>
        </div>
    )
}

export default Shop