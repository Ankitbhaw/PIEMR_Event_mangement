import React, { useEffect } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import news1 from "../Assets/news1.jpg"
import news2 from "../Assets/news2.jpg"
import news3 from "../Assets/news3.jpg"
import news4 from "../Assets/news4.jpg"
import fest1 from "../Assets/Navratri.jpg"
import fest2 from "../Assets/fest2.jpeg"
import fest3 from "../Assets/fest3.jpeg"
import fest4 from "../Assets/fest4.jpeg"
import a1 from "../Assets/a1.jpeg"
import a2 from "../Assets/a2.jpeg"
import a4 from "../Assets/a4.jpg"
import act1 from "../Assets/act1.jpeg"
import act3 from "../Assets/act3.jpeg"
import act2 from "../Assets/act2.jpeg"
import act4 from "../Assets/act4.jpeg"
import act5 from "../Assets/act5.jpg"
import sp1 from "../Assets/sport1.jpeg"
import sp2 from "../Assets/sport2.jpeg"
import sp3 from "../Assets/sport3.jpeg"
import sp4 from "../Assets/sport4.jpeg"
import us1 from "../Assets/us1.jpeg"
import us2 from "../Assets/us2.jpeg"
import us3 from "../Assets/us3.jpeg"
import us4 from "../Assets/us4.jpeg"
import image1 from "../Assets/PIEMR.jpeg"
import { Link } from "react-router-dom";


export default function Home() {
  let index = 0;
  useEffect(() => {
    
    displayImages();
  }, [])
  
  function displayImages() {
    let i;
    const images = document.getElementsByClassName("images");
    for (i = 0; i < images.length; i++) {
      images[i].style.display = "none";
    }
    index++;
    if (index > images.length) {
      index = 1;
    }
    images[index-1].style.display = "block";
    setTimeout(displayImages, 5000);
  }
  return (
    <Container>

      <div className="w-screen mx-auto my-8 flex items-center pl-2 bg-violet-900 pl-20" >
        <span className="bg-violet-900 p-2 font-bold text-xl">
        Announcement
        </span>
        <marquee className=" h-10 py-2 bg-slate-400 rounded-l-xl text-zinc-950 cursor-pointer" >
        <span  >
            Notifications are here loered to the screen and the notification container loered to the screen and the notification container
        </span>
        </marquee>
      </div>
      <div className="image-slideshow ">
          <div className="images fade " >
              <img src={image1} alt="img1"/>
          </div>
          <div className="images fade ">
              <img src={us2} alt="img1"/>
          </div>
          <div className="images fade ">
              <img src={us1} alt="img1"/>
          </div>
      </div>
      <div className="mt-10">
        <div className="w-100 bg-gray-800 p-5 rounded-xl ">
          <span className="font-bold text-3xl ml-3  border-l-4 pl-2 border-red-800">
            Academics
          </span>
          <div className="flex">
            <Card title={"Smart India Hackathon"} url={a1}  />
            <Card title={"Data Analytics with Case Studies Workshop"} url={a4} />
            <Card title={"Adroit Training Division"} url={a2} />
            <Card title={"PMUN"} url={act2}/>
          </div>
        </div>
        <div className="w-100 bg-neutral-800 p-5 rounded-xl my-10">
          <span className="font-bold text-3xl ml-3  border-l-4 pl-2 border-red-800">
            Sports
          </span>
          <div className="flex">
            <Card title={"Football"} url={sp1} />
            <Card title={"Cricket"} url={sp2}  />
            <Card title={"volleyball"} url={sp3}  />
            <Card title={"chess"} url={sp4}  />
          </div>
        </div>
        <div className="w-100 bg-gray-600 p-5 rounded-xl my-10">
          <span className="font-bold text-3xl ml-3  border-l-4 pl-2 border-red-800">
            Urjotsav
          </span>
          <div className="flex">
            <Card title={"Cultural"} url={us1} />
            <Card title={"DJ Night"} url={us2} />
            <Card title={"HR Meet"} url={us3} />
            <Card title={"Technical Workshop"} url={us4} />
          </div>
        </div>
        <div className="w-100 bg-zinc-600 p-5 rounded-xl my-10 ">
          <span className="font-bold text-3xl ml-3  border-l-4 pl-2 border-red-800">
            Fest
          </span>
          <div className="flex overflow-x-auto">
            <Card title={"Ganesh Chaturti"} url={fest2} />
            <Card title={"Navratri"} url={fest1} />
            <Card title={"Holi Celebration"} url={fest3} />
            <Card title={"Vishwakarma jayanti"} url={fest4} />
          </div>
        </div>
        <div className="w-100 bg-gray-900 p-5 rounded-xl my-10">
          <span className="font-bold text-3xl ml-3  border-l-4 pl-2 border-red-800">
            Activity
          </span>
          <div className="flex">
            <Card title={"Yoga"} url={act3} />
            <Card title={"Plantation Drive"} url={act1} />
            <Card title={"Placements"} url={act4} />
            <Card title={"ISRO"}  url={act5} />
          </div>
        </div>
        <div className="w-100 bg-zinc-800 p-5 rounded-xl my-10">
          <span className="font-bold text-3xl ml-3  border-l-4 pl-2 border-red-800">
            News & Media
          </span>
          <div className="flex">
          <Link to={"/sports"}>  <Card title={"Memorandum of Understanding (MoU)"} url={news1} /></Link>
            <Card title={"Received a Generous Grant of Rs. 20 Lacs from AICTE"} url={news2} />
            <Card title={"Establishment of SAEINDIA Collegiate Club at PIEMR’s Premises"} url={news3} />
            <Card title={"PIEMR has been designated as the Nodal Center for Virtual Labs of IIT Delhi"}  url={news4} />
          </div>
        </div>
      </div>
    </Container>
  );
}
const Container = styled.div`

`;
