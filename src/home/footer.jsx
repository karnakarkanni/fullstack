
import { Link } from "react-router-dom";
function Footer(){

    return(<>
     <footer id="footer">
        <div id="footers" >
            <h2>event mangement system</h2>
            <p>Our team excels in delivering top-notch events with precision and excellence.</p>
                <div id="footeri"><span><i class="bi-instagram"></i></span>
                    <span><i class="bi-facebook"></i></span>
                    <span><i class="bi-x"></i></span>
                    <span><i class="bi-youtube"></i></span></div>
                
        </div>
        <div id="footers">
            <h2>Usefll links</h2>
            <ul id="k"><Link to={"/home"} id="link">Home</Link>  </ul>
            <ul id="k" ><Link to={"/service"} id="link">Events</Link>   </ul>
            <ul id="k"> <Link to={"/about"} id="link">About us</Link>   </ul>
            <ul id="k"> <Link to={"/foot"} id="link">address</Link>    </ul>
            <ul id="k">Login </ul>
        </div>
        <div id="footers">
            <h2>Other Links</h2>
            <p>terms & Conditions</p>
            <p>Privacy policy</p>
        </div>
        <div id="footers">
            <h2>Contact Details</h2>
            <p>Email:ruchitha@123.com</p>
            <p>Email:karnakarmaratikanni@gamil.com</p>
            <p>+91 9494253381</p>
            <p>+91 6302948618</p>

            
        </div>
    </footer>
    </>)
}
export default Footer;