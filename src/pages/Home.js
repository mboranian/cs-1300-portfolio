
import Navigation from '../components/navbar';
import '../App.css';
import { BsEnvelopeFill, BsLinkedin, BsGithub, BsChevronCompactDown, BsChevronCompactUp } from "react-icons/bs";
import Card from '../components/card';


function Homepage() {

    const handleClick = (event, section) => {
        event.preventDefault(); // Prevent the default anchor behavior
        const targetId = section // Remove the '#' from href
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    function toTop(event) {
        event.preventDefault(); // Prevent the default anchor behavior
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };


    return (
        <div className="App" id='home'>
            <div id='Nav-Bar'>
                <Navigation />
            </div>
            <div id='rest'>
                <div id='Centerpiece'>
                    <h1 id='title'>
                        cs 1300<br />
                        Portfolio
                    </h1>
                    <BsChevronCompactDown id="downarrow" className="arrow" onClick={(event) => handleClick(event, "About")} />
                </div>
                <div id="About">
                    <h1 className='Case-Header' id='About-Header'>About</h1>
                    <div id='About-Body'>
                        <img src='images/IMG_2792.jpeg' alt='me' id='Headshot' />
                        <p>
                            Lorem ipsum dolor sit amet,consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. U
                            t enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu
                            fugiat nulla pariatur. Excepteur sint occaecat cupidatat no
                            n proident, sunt in culpa qui officia deserunt mollit anim id
                            est laborum.
                        </p>
                    </div>
                    <div id='arrow2div'>
                        <BsChevronCompactDown id="downarrow2" className="arrow" onClick={(event) => handleClick(event, "Projects")} />
                    </div>
                </div>
                <div id="Projects">
                    <h1 className='Case-Header' id='ProjectsHeader'>Projects</h1>
                    <div id="projectsbody">
                        <Card
                            name="Responsive Redesign"
                            path="/responsiveredesign"
                            blurb=
                            "A simple and modern redesign of a local 
                            business's website using html and css"
                            pic="images/RedesignScreenshot.jpeg"
                        />
                        <Card
                            name="Development"
                            path="/development"
                            blurb=
                            "An untuitive and user flriendly implementation
                            of an online Shoe Store using React"
                            pic="images/DevelopmentScreenshot.jpeg"
                        />
                        <Card
                            name="Portfolio Work"
                            path="/portfolio"
                            blurb=
                            "The creation of this very portfolio!
                            Using React to show my syle as a programmer"       
                            pic="images/RedesignScreenshot.jpeg"
                        />
                    </div>
                    <BsChevronCompactDown id="downarrow3" className="arrow" onClick={(event) => handleClick(event, "Contact")} />
                </div>
                <div id="Contact">
                    <h1 className='Case-Header' id='Contact-Header'>Contact</h1>
                    <div id="ContactLogos">
                        <a href="mailto: matthewboranian@gmail.com">
                        <BsEnvelopeFill className="contactlogo" />
                        </a>
                        <a href='https://github.com/mboranian' target='blank'>
                        <BsGithub className='contactlogo' />
                        </a>
                        <a href='https://www.linkedin.com/in/matthew-boranian-149a54274/' target='blank'>
                        <BsLinkedin className='contactlogo' />
                        </a>
                    </div>
                    <BsChevronCompactUp id='uparrow' className="arrow" onClick={toTop} />
                    <h6 id='backtotop'>Back to top</h6>
                </div>
            </div>
        </div>
    )
}

export default Homepage; 