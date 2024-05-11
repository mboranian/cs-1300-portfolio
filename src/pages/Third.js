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
                        projects of my own, as the year comes to an end the question is "how best to display my work?"<br/>
                        For this project I needed to create my own design portfolio from scratch using all the skills I learned
                        this semester. This project represents the culmination of my experience this semester.
                        
                    </p>
                </div>
                <h2 className="sectionHeader">Research</h2>
                <div className="casestudysection">
                    <p >
                        
                        
                    </p>
                </div>
                
            </div>
        </div>
        
        
    )

}

export default Third;