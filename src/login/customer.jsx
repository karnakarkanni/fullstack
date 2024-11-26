
import { Link ,useNavigate} from "react-router-dom";
function Customer(){
    var  navigate = useNavigate();

    var admin=(e)=>{
        e.preventDefault()

        if((e.target[0].value)=="karnakarmaratikanni@gmail.com" && (e.target[1].value)=="123"){
            navigate("/adimin/todo")
        }else{
            alert("Invalid details")
        }
    }
    var user=(e)=>{
        e.preventDefault()
        navigate("/home")



    }



    return(<>
    <div id="Customer">
    <div id="l">
        <h1>Customer Login</h1>
        <form action="" onSubmit={user}>
            <input type="email" placeholder="Email"  id="k1" /><br /><br />
            <input type="password" placeholder="password" id="k2"/><br /><br />
            <input type="submit" id="k3"/><br /><br />
            <span>Not a member ? <Link to={"/Registration"}>registar here</Link> </span><br /><br />
            <span> <Link to={"/home"}>Login as a Guest</Link> </span><br /><br />
        </form>
    </div>
    <div id="l">
        <h1>Admin Login</h1>
        <form action="" onSubmit={admin}>
            <input type="email" placeholder="Email"  id="k1" /><br /><br />
            <input type="password" placeholder="password" id="k2"/><br /><br />
            <input type="submit" id="k3"/>  
        </form>
    </div>
    </div>
    </>)
}
export default Customer;