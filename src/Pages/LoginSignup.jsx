import './css/LoginSignup.css'

const LoginSignup = () => {
    return (
        <div id="loginsignup">
            <div id="loginsignup-container">
                <h1>Sign Up</h1>
                <form className='d-flex flex-column gap-4 mt-3'>
                    <input type="text" placeholder="Your name" className='form-control' />
                    <input type="email" placeholder="Your email" className='form-control'/>
                    <input type="password" placeholder="Your password" className='form-control'/>
                    <input type="submit" value="Continue" className='btn btn-danger p-2 mb-3' />
                </form>
                <div className="d-flex">
                    <p>Already have an account?</p>
                    <a href="" className='text-danger text-decoration-none ms-2'>Login here</a>
                </div>
                <div id="loginsignup-agree" className='d-flex'>
                    <input type="checkbox" name="" id="" />
                    <p>By continue, i agree to the terms of use & privacy policy.</p>
                </div>
            </div>
        </div>
    )
}

export default LoginSignup