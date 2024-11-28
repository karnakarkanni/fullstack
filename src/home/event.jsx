import { Link } from "react-router-dom";
import About from "./about";
function Service() {
    return (
        <>
            <div id="services">
                <h1 id="servicesh">Events</h1>
                
                 <div id="row">
                   <Link to={"/home/service"} id="link"><div id="cards">
                    <img src="https://cdn.nettachetas.com/wp-content/uploads/2024/01/How-To-Plan-An-Amazing-Birthday-Party.jpg?strip=all&lossy=1&ssl=1" width={300} height={400} id="card1" alt="" />
                        <h2 align="center">Birthday parties</h2>
                    </div></Link>

                  <Link to={"/home/service"} id="link"> <div id="cards">
                        <img src="https://vajraevents.com/wp-content/uploads/elementor/thumbs/wedding-scaled-qqkilrmaxgofzvbryjpk9q9jsiupi46ze33yl6zkys.jpg" width={300} height={400} id="card1" alt="" />
                        <h2 align="center">Marriage</h2>
                    </div></Link> 

                   <Link to={"/home/service"} id="link"> <div id="cards">
                    <img src="https://i0.wp.com/scottishigh.com/wp-content/uploads/2019/11/Annual-Day-Celebration-2019-3.jpg" width={300} height={400} id="card1" alt="" />
                       <h2 align="center">Annualday celebration </h2>
                    </div></Link>


                  <Link to={"/home/service"} id="link">  <div id="cards">
                    <img src="https://img.freepik.com/premium-photo/bride-groom-altar-high-resolution-image-capturing-wedding-ceremony-solemnity-beauty_980716-197081.jpg" width={300} height={400} id="card1" alt="" />
                        <h2 align="center">Reception</h2>
                    </div></Link>


                   <Link to={"/home/service1"} id="link"> <div id="cards">
                    <img src="https://pbs.twimg.com/media/GRp-r6mXcAAK_uB?format=jpg&name=4096x4096" width={300} height={400} id="card1" alt="" />
                        <h2 align="center">Sports</h2>
                    </div></Link>


                  <Link to={"/home/service1"} id="link">  <div id="cards">
                    <img src="https://industryhit.com/t/wp-content/uploads/2024/10/Kiran-Abbavaram-KA-Movie-Pre-Release-Event-1.jpg" width={300} height={400} id="card1" alt="" />
                        <h2 align="center">Movie Events</h2>
                    </div></Link>


                  <Link to={"/home/service1"} id="link">  <div id="cards">
                    <img src="https://www.rajwadaevents.com/uploaded-files/celebrity-images/Corporate-Events5832.jpg" width={300} height={400} id="card1" alt="" />
                       <h2 align="center">Corporate Events</h2>
                    </div></Link>


                 <Link to={"/home/service"} id="link">   <div id="cards">
                    <img src="https://micetalk.com/wp-content/uploads/2022/07/PAGE-28.jpg" width={300} height={400} id="card1" alt="" />
                        <h2 align="center">Mice Events</h2>
                    </div></Link>
                </div>
            </div>
            <About></About>

            
        </>
    )
}
export default Service;