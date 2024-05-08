import { Link } from "react-router-dom";
import '../App.css';
import { BsArrowLeft } from "react-icons/bs";

function Development() {

    return (
        <div className='Case-Study' id='Development-Section'>
            <h1 className='Case-Header'>Development</h1>
            <Link to='/' className="returnlink">
                <button class="homebutton returnbutton">
                    <BsArrowLeft />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Home
                </button>
            </Link>
        </div>
    )

}

export default Development;