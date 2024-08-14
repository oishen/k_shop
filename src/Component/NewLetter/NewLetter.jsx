import './NewLetter.css'

const NewLetter = () => {
    return (
        <div id='newletter' className='row mt-5 pt-5 pb-5 mb-5 ps-lg-5 pe-lg-5 align-items-center m-auto container-lg'>
            <h2 className=''>Get Exclusive Offers On Your Email</h2>
            <p>Subscribe to our newletter and stay update</p>
            <div className='border d-flex justify-content-between p-0'>
                <input type="email" placeholder='Your email id' className='w-75 ps-3' />
                <button className='btn btn-dark ps-4 pe-4 rounded-0'>Subscribe</button>
            </div>
        </div>

    )
}

export default NewLetter