import { Link } from "react-router-dom";
import '../App.css';
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

function Third() {

    return (
        <div className='Case-Study' id='Third-Thing'>
            <h1 className='Case-Header'>Portfolio</h1>
            <Link to='/' className="returnlink">
                <button class="homebutton returnbutton">
                    <BsArrowLeft />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Home
                </button>
            </Link>
            <div className="casestudybody">
                <h2 className="sectionHeader">The Problem</h2>
                <div className="casestudysection">
                    <p >
                        Having spent an engaging semester in CS1300: UI/UX and having learned about design and having created
                        projects of my own, as the year comes to an end the question is "how best to display my work?"<br />
                        For this project I needed to create my own design portfolio from scratch using all the skills I learned
                        this semester. This project represents the culmination of my experience this semester.

                    </p>
                </div>
                <h2 className="sectionHeader">Research</h2>
                <div className="casestudysection">
                    <p >
                        Preperation for this project primarily involved shopping around shopping around
                        the portolios of different designers and making notes of features I liked. What I took
                        away from this was that while I wanted my portfolio to be interactive and cool, ease of
                        navigation was my top priority. Many designers had so many bells and whistles it was
                        difficult to folllow the content.<br /><br />
                        I also got together with a couple of my class mates to critique each others portfolios. The
                        feedback I got was vital and informed some of the larger decisions of my portfolio. For
                        example, my first draft had all my case studies on my landing page in their entirety. Thanks
                        to the feedback from my peers, it became a multipage website.

                    </p>
                </div>
                <h2 className="sectionHeader">The Process</h2>
                <div className="casestudysection">
                    <p >
                        Implementing this portfolio has been the single largest web design project I have ever attemtped
                        and it was a long process. I started with the basics. I explored various component libraries for
                        inspiration, and added features step by step. I went from one page to multiple pages.
                        I went from solid color backgrounds to lively colored backgrounds. Taking the time to get
                        certain details right meant I had to sarifice other things. For example, ideally I would have
                        had an entire page dedicated to my resume! In the end, the design that really spoke to me
                        was the fuild, continuous layout seen on all the pages. I really felt that a stationary but
                        colorful background added an attractive element.
                    </p>
                </div>
                <h2 className="sectionHeader">The Final Product</h2>
                <div className="casestudysection">
                    <p className="casestudytext">
                        You're looking at it!<br />
                        In the end it became a labor of love, and I'm quite proud of it.
                        Obviously there's always room for improvement, but the final product
                        represents a lot of hard work and my first multipage website.
                        <br/><br/>
                        <Link to='/'>
                            <button class="homebutton returnbutton">
                                Take Me Home!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<BsArrowRight />
                            </button>
                        </Link>
                    </p>
                    <img src="images/homepage.png" className="casestudyimage" alt="Homepage of portfolio"/>
                </div>
                <h2 className="sectionHeader">Takeaways</h2>
                <div className="casestudysection">
                    <p>
                        In the end, creating this portfolio was an incredibly rewarding
                        experience. I'd done a couple projects using html, css, and React this
                        semester, but this was the first time I was really given free reign.
                        This project really helped improve my fluency with these tools. Programming
                        started slow, but picked up as I got into it. I'm looking forward to my next
                        project. 
                    </p>
                </div>

            </div>
        </div>


    )

}

export default Third;