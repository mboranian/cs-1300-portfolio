import '../App.css'
import '../pages/Home'
import { Link } from "react-router-dom";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

function Card(props) {




    return (
        <div className='projectcard'>

            <h3 className='CardHeader'>{props.name}</h3>
            <img src={props.pic} className='cardpic'/>
            <p className='projectblurb'>{props.blurb}</p>
            <Link to={props.path} className='projectlink'>
                <button className="homebutton projectbutton">
                    {props.name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<BsArrowRight />
                </button>
            </Link>
        </div>
    );
}

export default Card;