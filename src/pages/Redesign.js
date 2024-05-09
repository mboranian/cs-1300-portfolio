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
        </div>
    )

}

export default Redesign;