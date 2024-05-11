import { Link } from "react-router-dom";
import '../App.css';
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

function Development() {

    return (
        <div className='Case-Study' id='Development-Section'>
            <h1 className='Case-Header'>Development</h1>
            <Link to='/' className="returnlink">
                <button class="homebutton returnbutton">
                    <BsArrowLeft />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Home
                </button>
            </Link>
            <div className="casestudybody">
                <h2 className="sectionHeader">The Problem</h2>
                <div className="casestudysection">
                    <p>
                        This project was all about getting a creative opportunity to work on my skills with React.
                        Selecting a topic of my choice I had to create an interface that was intuitive and interactive.
                        <br /> <br />
                        It had to inlcude three things:
                        <ul>
                            <li>A visual aggregator</li>
                            <li>Sorting Capability</li>
                            <li>A filter function</li>
                        </ul>
                        <br /> <br />
                        This was my first real opportunity to implement something that incorporated a logical element to it.
                        Using React, I was gonna be able to hone my skill with javascript and web design. Being able to choose
                        my own theme added personal element to it, so I decided to pick somthing that I'm fond of and would catch
                        the eye: <b>Shoes!</b>
                    </p>
                </div>
                <h2 className="sectionHeader">Research</h2>
                <div className="casestudysection">
                    <p className="casestudytext">
                        To begin this project I some research into what some possible standards might be that I
                        could apply to my final design. This consisted of conducting a competetive anaylis of three
                        websites all of which implemented the features I was aiming for. The table shows the website
                        names as well as the criteria by which each was judged.
                    </p>
                    <img src="images/CompAnalysis.png" className="casestudyimage" />
                </div>
                <div className="casestudysection">
                    <img src="images/coolors.png" className="casestudyimage" />
                    <div id="solobutton">
                        <a href="https://mboranian.github.io/cs1300-responsive-redesign/" target="blank">
                            <button class="homebutton returnbutton">
                                <BsArrowLeft />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Check out Coolors.co
                            </button>
                        </a>
                    </div>
                </div>
                <div className="casestudysection">
                    <div id="solobutton">
                        <a href="https://mboranian.github.io/cs1300-responsive-redesign/" target="blank">
                            <button class="homebutton returnbutton">
                                Check out Pinterest&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<BsArrowRight />
                            </button>
                        </a>
                    </div>
                    <img src="images/pinterest.png" className="casestudyimage" />
                </div>
                <div className="casestudysection">
                    <img src="images/zillow.png" className="casestudyimage" />
                    <div id="solobutton">
                        <a href="https://mboranian.github.io/cs1300-responsive-redesign/" target="blank">
                            <button class="homebutton returnbutton">
                                <BsArrowLeft />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Check out Zillow
                            </button>
                        </a>
                    </div>
                </div>
                <div className="casestudysection">
                    <p>
                        Ultimately this competetive analysis helped me determine what factors were important to me.
                        A key factor that I prioritized was making all the aggregator, filter and sort function require
                        as few clicks as possible. The multi-click favoriting process in some of the websites became tedious.
                    </p>
                </div>
                <h2 className="sectionHeader">The Process</h2>
                <div className="casestudysection">
                    <p>
                        The implementation of this webpage was a steep learning curve for me, I figured it out in the end.
                        I was familiar with React at the beginning of the process, and now I feel very familiar with it. The design
                        I had in mind from the beginning was simple one. There would be no possibel way for a user to be confused about
                        how exactly to utilze the site. It took lots trial and error, and debugging, but the final product came out great.
                    </p>
                </div>
                <h2 className="sectionHeader">The Final Product</h2>
                <div className="casestudysection">
                    <p className="casestudytext">
                        What I came up with in the end was a brightly colored shoe store that was easy to use and pleasant to look at!
                        <br /> <br />
                        <a href="https://mboranian.github.io/cs1300-responsive-redesign/" target="blank">
                            <button class="homebutton returnbutton">
                                Check it out&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<BsArrowRight />
                            </button>
                        </a>
                    </p>
                    <img src="images/DevelopmentScreenshot.jpeg" className="casestudyimage" />
                </div>
                <div className="casestudysection">
                <p>
                        The aggregator took the form of the cart which updates as the user presses the buttons on the shoe cards.
                        Adding shoes is done with a single click, and the buttons update to reflect whether or not a shoe has
                        been added. The filter function allowed for multiple categories, and the sort feature allows users to see the shoes
                        by price.
                    </p>
                </div>
                <h2 className="sectionHeader">Takeaways</h2>
                <div className="casestudysection">
                    <p>
                        Overall this was a huge learning experience for me. It was the first solo React project I'd encountered
                        in my Computer Science studies, and it proved a challenge. I think the design suffered a little as I stuggled
                        with the technical aspect of coding functionality into the website, but I'm pleases with the final product.
                        
                    </p>
                </div>


            </div>
        </div>
    )

}

export default Development;