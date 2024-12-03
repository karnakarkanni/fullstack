import { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../home/footer";
const images = [
  "https://www.marriagevenue.in/images/banner2.jpg",
  'https://watermark.lovepik.com/photo/20211122/large/lovepik-wedding-background-board-picture_500664172.jpg',
  "https://i.pinimg.com/736x/20/c4/9e/20c49ec31c7a13a1cadc31fc4beb765f.jpg",


];
function Outdoor() {

  const [users, setUsers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };
  useEffect(() => {
    const intervalId = setInterval(nextImage, 3000);


    return () => clearInterval(intervalId);
  }, []);

  const hello = () => {
    axios
      .get("http://localhost:3204/outdoor")
      .then((response) => {
        setUsers(response.data);
        console.log(response);
        console.log(users);
      })
      .catch((error) => {
        console.error("There was an error fetching data:", error);
      });
  };

  useEffect(() => {
    hello();
  }, []);

  const foundUser = users.map((user) => {
    return (
      <tr key={user.id}>
        <td>{user.id}</td>
        <td>{user.venue}</td>
        <td>{user.address}</td>
        <td>{user.type}</td>
        <td>{user.baseprice}</td>
        <td><button>See More</button></td>

      </tr>
    );
  });


  return (<>
    <div id="admin">
      {/* <div id="home3" align="center" >
      <img src={images[currentIndex]} style={{width:1000}}/>
    </div> */}
    <div>
          <h1 id="indoorh1" class="highlight">
            With 12 years of excellence in the event industry, our expertise spans all types of events like Weddings, Corporate, Social and MICE.
          </h1>

          <h3 id="indoorh4" class="highlight">
            Our corporate event services  ensure a professional and memorable experience. We specialise in delivering high-quality hospitality, and audio-visual management tailored to your corporate needs.
          </h3>

        </div>
   
      
      <div>
        
      </div>
      <h1>Venue Details </h1>
      <table border={2} align="center" style={{ backgroundColor: "#d23a7ed1" }}>
        <thead>
          <tr>
            <th>S.NO</th>
            <th>Venue</th>
            <th>Address</th>
            <th>Type</th>
            <th>Baseprice</th>
            <th>See More</th>


          </tr>
        </thead>
        <tbody>{foundUser}</tbody>
      </table>
      <div>
          <h1>Portfolio</h1>
      <div id="Portfolio">
        <img style={{ marginRight: 40 }} src="https://leisureopportunities.co.uk/images/HIGH22018_889414.jpg" alt="" width={550} height={370} />
        <img src="https://content.jdmagicbox.com/v2/comp/hyderabad/w5/040pxx40.xx40.240214113806.l2w5/catalogue/moon-light-events-planner-kukatpally-hyderabad-birthday-party-decorators-f6e6kjivpx.jpg" width={500} height={370} alt="" />
        <img style={{ marginRight: 40 }} src="https://glimageurl.golocall.com/golocal-post/image/155696_1476958366.jpeg" alt="" width={555} height={370} />
        <img src="https://lh5.googleusercontent.com/proxy/U47y8_8HB4T3IGrTq8aLyb7mvbHtMoRG5fgKPx1OnadMmRBGrSUbtLhKQXUE3RondLGoaq13Zn5cFIjWXyDaykiaJe_QbDFpfbEE2hz_itTaOS7alvigY8-WZA" width={500} height={370} alt="" />
      </div>
        

      </div>
      <div align="center">
          <h1>Services We Provide</h1>
          <div id="provide">
            <h2 id="provide1">Venue selection</h2>
            <h2 id="provide1">Logistics</h2>
            <h2 id="provide1">Hospitality</h2>
            <h2 id="provide1">Food</h2>
            <h2 id="provide1">Decor</h2>
            <h2 id="provide1">Photography</h2>
            <h2 id="provide1">Entertainment</h2>
            <h2 id="provide1">Artist management</h2>
            <h2 id="provide1">Manpower</h2>
            <h2 id="provide1">Audio visual management</h2>
            <h2 id="provide1">SFX Licence</h2>
            <h2 id="provide1"> Licence</h2>

          </div>

        </div>



    </div>




    <Footer></Footer>

  </>)
}
export default Outdoor;