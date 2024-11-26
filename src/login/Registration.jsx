import { Link } from "react-router-dom";
function Registration(){
    return (<>
    <div id="Customer">
    <div id="l">
        <h1>Registration Page</h1>
        <form action=""  >
            <input type="text" placeholder="Name" id="k1" /><br /><br />
        <input type="text" placeholder="Email" id="k2" value=""/><br /><br />
        <input type="password" placeholder="Password" id="k3" value=""/><br /><br />
        <input type="password" placeholder="confirm password" id="k4" value=""/><br /><br />
        <input type="submit" value="submit" id="k5"/><br /><br />
        <span>Already have an account? <Link to={"/login"} >Sign in here</Link></span>
        </form>
        
    </div>

    </div>
        
    </>)
}
export default Registration;