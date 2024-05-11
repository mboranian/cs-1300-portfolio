import { Link } from "react-router-dom";
import '../App.css';
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

function Redesign() {

    return (
        <div className='Case-Study' id='Responsive-Redesign'>
            <h1 className='Case-Header'>Responsive Redesign</h1>
            <Link to='/' className="returnlink">
                <button class="homebutton returnbutton">
                    <BsArrowLeft />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Home
                </button>
            </Link>
            <div className="casestudybody">
                <h2 className="sectionHeader">The Problem</h2>
                <div className="casestudysection">
                    <p className="casestudytext">
                        This project was all about finding an existing
                        website and thinking critically  about how it might
                        be improved. The original website was usable, but
                        had several critical weak points that needed to be
                        addressed. Local businesses shouldn’t suffer simply
                        because they can’t maintain a full time design team.
                        <a href="https://www.campusfinewines.com" target="blank">
                            <button class="homebutton returnbutton">
                                Original Website&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<BsArrowRight />
                            </button>
                        </a>
                    </p>
                    <img src="images/OriginalCFW.png" className="casestudyimage" />
                </div>
                <div className="casestudysection">
                    <p>
                        After interviewing users, visting the store in person, and
                        trying to make a purchase on the orignal cite, I felt confident about what
                        steps to take going forward. When patronzing their local liquor store,
                        college students want it simple and quick.
                    </p>
                </div>
                <h2 className="sectionHeader">The Process</h2>
                <div className="casestudysection">
                    <p className="casestudytext">
                        Doing <b>quick sketches</b> was the first step. It's important to get a
                        variety of ideas on paper(even some bad ones). The fundamental idea
                        behind each sketch was the put the stores's product front and center,
                        a thing not done by the original website.
                    </p>
                    <img src="images/SpeedSketches.PNG" className="casestudyimage" />
                </div>
                <div className="casestudysection">
                    <img src="images/FinalSketch.PNG" className="casestudyimage" />
                    <p className="casestudytext">
                        Next I made a <b>final sketch</b>. This encapulated the basics of all
                        the layout design choices I made. No more dropdown menus that hide the
                        products. Wine is what they sell, so buying wine is now the most obvious
                        button on the page. The satellite services of this liquor store are still
                        clearly visible in the Navigation Bar, but they no longer take up prime
                        space.
                    </p>
                </div>
                <div className="casestudysection">
                    <p className="casestudytext">
                        Then it was on to <b>Lo-Fi Mockups</b> which of course lead to <b>Hi-Fi Mockups</b>!
                        <br />
                        <br />
                        <img src="images/DesktopLoFi.PNG" className="casestudyimage" />
                        <BsArrowRight fontSize={100} />
                        <img src="images/DesktopHiFi.PNG" className="casestudyimage" />
                    </p>
                </div>
                <h2 className="sectionHeader">The Final Product</h2>
                <div className="casestudysection">
                    <p className="casestudytext">
                        Ultimately the final redesign did exactly what it set out to do.
                        <br /> <br />
                        <a href="https://mboranian.github.io/cs1300-responsive-redesign/" target="blank">
                            <button class="homebutton returnbutton">
                                Check it out&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<BsArrowRight />
                            </button>
                        </a>
                    </p>
                    <img src="images/RedesignScreenshot.jpeg" className="casestudyimage" />
                </div>
                <div className="casestudysection">
                    <p >
                        Before the redesign it was a website that was meant to sell liquor. The only
                        issue was that it was unclear how! Now it would be impossible to mistake where to go when
                        you're looking for wine, or beer, or anything else. The orignal webiste had what looked like a
                        navigation bar, but turned out to be unclickable. In the new design, everything that looks
                        clickable is clickable.
                    </p>
                </div>
                <h2 className="sectionHeader">Takeaways</h2>
                <div className="casestudysection">
                    <p>
                        In the end this was a highly rewarding solo project that served as my introduction into the
                        world of web design. I learned that just because you have an image in your head does not mean
                        you'll necessarily be able to put that idea into code. Like anything, this takes practice. Project
                        was a useful jumping off point for working on my sense of design.
                    </p>
                </div>
            </div>
        </div>
    )

}

export default Redesign;