import './NewCollection.css'
import new_collection from '../Assets/new_collection'
import Item from '../Item/Item'

const NewCollection = () => {
    return (
        <div id='new-collection' className='mt-5 pt-5 container-lg'>
            <h2 className='text-center h2'>New Collection</h2>
            <div id="line" className='m-auto'></div>
            <div className='mt-5 row row-gap-5'>
                {new_collection.map((item, i)=>
                    {
                        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                    }
                )}
            </div>
        </div>
    )
}

export default NewCollection