import { Link } from "react-router-dom"
import Home from "./home"
function Nav(){

    return(<>
    <nav>
        <div id="nav">
            <ul id="k"><Link to={"/home"} id="link">Home</Link>  </ul>
            <ul id="k" ><Link to={"/service"} id="link">Events</Link>   </ul>
            <ul id="k"> <Link to={"/about"} id="link">About us</Link>   </ul>
            <ul id="k"> <Link to={"/foot"}id="link">address</Link>    </ul>
            <ul id="k"> <Link to={"/login"}id="link">Login</Link>  </ul>
            
        </div>
    </nav>
    </>
    )
}
export default Nav