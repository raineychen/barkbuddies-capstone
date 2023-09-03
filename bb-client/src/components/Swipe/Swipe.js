import "./Swipe.scss";
// import Footer from "../Footer/Footer";
// import userProfile from "../../assets/Images/profile_user.png";
// import heart from "../../assets/Images/heart.png";
// import info from "../../assets/Images/info.png";
// import xMark from "../../assets/Images/x_mark.png";
// import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap'; 
// import 'react-id-swiper/lib/styles/css/swiper.css'; 
import 'swiper/swiper-bundle.css'; 
import { Swiper, SwiperSlide } from 'swiper/react'; 


const dummyData = [
  {
    id: 5,
    dogName: "Buddy",
    ownerName: "John Smith",
    dogAge: 3,
    dogBreed: "Golden Retriever",
    dogGender: "Male",
    photoURL: "https://example.com/buddy.jpg",
  },
  {
    id: 4,
    dogName: "Luna",
    ownerName: "Emily Johnson",
    dogAge: 2,
    dogBreed: "Labrador Retriever",
    dogGender: "Female",
    photoURL: "https://example.com/luna.jpg",
  },
  {
    id: 2,
    dogName: "Max",
    ownerName: "Michael Davis",
    dogAge: 4,
    dogBreed: "German Shepherd",
    dogGender: "Male",
    photoURL: "https://example.com/max.jpg",
  },
  {
    id: 3,
    dogName: "Lucy",
    ownerName: "Sophia Wilson",
    dogAge: 1,
    dogBreed: "Poodle",
    dogGender: "Female",
    photoURL: "https://example.com/lucy.jpg",
  },
  {
    id: 1,
    dogName: "Charlie",
    ownerName: "Olivia Martinez",
    dogAge: 5,
    dogBreed: "Bulldog",
    dogGender: "Male",
    photoURL: "https://example.com/charlie.jpg",
  },
];


function Swipe() {
  return (
    <div className="container">
    <Swiper
      slidesPerView={1}
      onSwiper={(swiper) => {}}
      onSlideChange={() => {}}
    >
      {dummyData.map((card, index) => (
        <SwiperSlide key={index} className="card">
          <div className="text">{card}</div>
        </SwiperSlide>
      ))}
    </Swiper>
    <Button onClick={() => console.log('oulala')}>You can press me</Button>
  </div>
  );
}

export default Swipe;