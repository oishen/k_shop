import './DescriptionBox.css'

const DescriptionBox = () => {
    return (
        <div id='descriptionbox' className='container-lg mt-5 mb-5'>
            <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item">
                    <a className="nav-link active" data-bs-toggle="tab" href="#home">Description</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="tab" href="#menu1">Review (122)</a>
                </li>
            </ul>

            <div className="tab-content">
                <div id="home" className="container tab-pane active"><br />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div id="menu1" className="container tab-pane fade"><br />
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                
            </div>
        </div>
    )
}

export default DescriptionBox