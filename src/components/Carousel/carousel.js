import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.js";
import { Autoplay, Pagination, Navigation } from "swiper";
import {Link} from "react-router-dom";
import {Img,Slideinfo,Slidetitle,Slideprice} from "./style";

export default function Carousel() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="swiperSlide"> 
            <Slideinfo>
                <Slidetitle>Tyaga DF - 76 </Slidetitle>
                <Slideprice>4044</Slideprice>
                <Link to='' className="btn-success"> Sotib Oling </Link>
            </Slideinfo>
            <Img src="koksacha.png"></Img>
        </SwiperSlide>
        <SwiperSlide className="swiperSlide"> 
            <Slideinfo>
                <Slidetitle>Tyaga DF - 76 </Slidetitle>
                <Slideprice>4044</Slideprice>
                <Link to='' className="btn-success"> Sotib Oling </Link>
            </Slideinfo>
            <Img src="koksacha.png"></Img>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
