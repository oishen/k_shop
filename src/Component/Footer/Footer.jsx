import './Footer.css'
import footer_logo from '../Assets/logo.png'

const Footer = () => {
    return (
        <div id='footer'>
            <div id="footer-logo">
                <img src={footer_logo} alt="" />
            </div>
            <div id="footer-link" className='gap-sm-5 gap-3 d-flex justify-content-center'>
                <p>Company</p>
                <p>Product</p>
                <p>Offices</p>
                <p>About</p>
                <p>Contact</p>
            </div>
            <div id="footer-social-icon">
                <div id="footer-icons-containier">
                    <i className="fa-brands fa-facebook"></i>
                </div>
                <div id="footer-icons-containier">
                    <i className="fa-brands fa-youtube"></i>
                </div>
                <div id="footer-icons-containier">
                    <i className="fa-brands fa-x-twitter"></i>
                </div>
            </div>
            <div id="footer-copyright">
                <hr />
                <p>Copyright @ 2024 - All Right Reserved.</p>
            </div>
        </div>
    )
}

export default Footer