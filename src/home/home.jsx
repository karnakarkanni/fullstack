import Service from "./event";
import image1 from "../image/image1.jpg"
import { useEffect,useState } from "react";
const images = [
    "https://www.marriagevenue.in/images/banner2.jpg",
    'https://watermark.lovepik.com/photo/20211122/large/lovepik-wedding-background-board-picture_500664172.jpg',
    'https://www.shutterstock.com/image-photo/candle-event-wedding-party-260nw-315451904.jpg',
   
  ];
function Home(){
      const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };
  useEffect(() => {
    const intervalId = setInterval(nextImage, 3000); // 3000ms = 3 seconds

 
    return () => clearInterval(intervalId);
  }, []);

    return (
        <>
       
<div id="home" >
{/* <div style={{width:100}} id="home3" >
      <img src={images[currentIndex]} style={{width:1000}}/>
    </div> */}

<div id="home1">
    <h1>Event management system</h1>
    <h5 >let's make your memories....</h5>
    <h1>Thing perish, but  </h1>
    <h1>experiences that </h1>
    <h1>Turn in memories don't</h1>
</div  >
</div>
      
<Service></Service>
        </>
    )
}
export default Home;