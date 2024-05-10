import { Link } from "react-router-dom";
import '../App.css';
import { BsArrowLeft } from "react-icons/bs";

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
                <h2 className="sectionHeader">The Problem </h2>
                <div className="casestudysection">
                    <p className="casestudytext">
                        This project was all about finding an existing
                        website and thinking critically  about how it might
                        be improved. The original website was usable, but
                        had several critical weak points that needed to be
                        addressed. Local businesses shouldn’t suffer simply
                        because they can’t maintain a full time design team.
                    </p>
                    <img src="images/OriginalCFW.png" className="casestudyimage"/>
                </div>
                <h2 className="sectionHeader">The Problem </h2>
                <div className="casestudysection">
                    <p className="casestudytext">
                        This project was all about finding an existing
                        website and thinking critically  about how it might
                        be improved. The original website was usable, but
                        had several critical weak points that needed to be
                        addressed. Local businesses shouldn’t suffer simply
                        because they can’t maintain a full time design team.
                    </p>
                    <img src="images/OriginalCFW.png" className="casestudyimage"/>
                </div>
            </div>
        </div>
    )

}

export default Redesign;