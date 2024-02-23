import animation from '../images/animation6.png'
import {useTypewriter , Cursor} from 'react-simple-typewriter'
import Skills from './Skills';

function Home (){
    
    const [text] = useTypewriter({
        words: ['FrontEnd Developer' , 'BackEnd Developer' , 'FullStack Web Developer'],
        loop: {},
        typeSpeed: 130,
        deleteSpeed: 100,
    })
    
    return(
        <div className="home" id='home'>
            <div className='container'>
                <div className='data-box row'>
                    <div className="my-data col-lg-7">
                        <p className="welcome-p">
                            Welcome All In My Portfolio
                        </p>
                        <h1 className="my-name display-3 mt-2">
                            Hi! I'm Ahmed Alaa ElKharashy,
                            <span> {text}</span>
                            <span><Cursor /></span>
                        </h1>
                        <p className="my-bio mt-3 mb-5">
                            Hello Everyone, I have 3 years of Experience in Web Development
                        </p>
                        <a className="lets-connect" href="#">
                            Let's Connect&nbsp;<i class="far fa-arrow-alt-circle-right"></i>
                        </a>
                    </div>
                    <div className="animation-img col-lg-5">
                        <img src={animation} ></img>
                    </div>
                </div>
                <Skills/>
            </div>
        </div>
    )
}

export default Home;