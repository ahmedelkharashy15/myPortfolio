import contactsImg from '../images/animation5.png'
import logo from '../images/logo.png'

function Footer(){
    return(
        <div className="footer">
            <div className="contacts">
                <div className='container row'>
                    <div className='contacts-img col-12 col-md-5'>
                        <img src={contactsImg}></img>
                    </div>
                    <div className='contacts-box col-12 col-md-6 ms-0 ms-md-5 mt-5 mt-md-0'>
                        <h3>Get In Touch</h3>
                        <div className='inputs-big-box'>
                            <div className='inputs-box1'>
                                <input type="text" placeholder='First Name'></input>
                                <input type="text" placeholder='Last Name' className='ms-1'></input>
                            </div>
                            <div className='inputs-box2'>
                                <input type="text" placeholder='Email Address' className='mt-1'></input>
                                <input type="text" placeholder='Phone No.' className='mt-1 ms-1'></input>
                            </div>
                            <textarea placeholder='Message' rows="6" cols="60" className='mt-1 message-inp'></textarea>
                        </div>
                        <div className='contacts-btn'>
                            <button>Send</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-box">
                <div className='white-box row'>
                    <div className='col-12 col-md-5'>
                        <p>
                            See My Projects At Once & leave Here Your E-mail Address
                        </p>
                    </div>
                    <div className='group col-12 col-md-7'>
                        <input type="text"  placeholder="E-mail Adderss" />
                        <button>Submit</button>
                    </div>
                </div>
                <div className='container row'>
                    <div className='footer-logo col-12 col-md-3 text-center text-md-start'>
                        <a href="#">
                            <img src={logo} width="120" height="120" />
                        </a>
                    </div>
                    <div className='footer-icons col-12 col-md-9'>
                        <div className='header-icons mx-auto mx-md-0 ms-md-auto my-3 my-md-0'>
                            <a href='#'><i class="fab fa-linkedin-in"></i></a>
                            <a href='#'><i class="fab fa-facebook-f i-middle"></i></a>
                            <a href='#'><i class="fab fa-instagram"></i></a>
                        </div>
                        <div className='copyrights mx-auto mx-md-0 ms-md-auto'>
                            Copyrights &copy; 2024 All Rights Reserved here By Ahmed ElKharashy 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;