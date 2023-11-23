// import Swiper core and required modules
import { Navigation, Pagination } from "swiper/modules";

import { Swiper as SwiperRc, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { ProjectCard } from "./ProjectCard";
import Projects from "../../data/projects.json";

export const Swiper = () => {
  return (
    <SwiperRc
      modules={[Navigation, Pagination]}
      slidesPerView={1}
      style={{ width: "100%", height: "100%" }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      navigation={true}
      centeredSlidesBounds={true}
      centeredSlides={true}
    >
      {Projects.map((project, index) => (
        <SwiperSlide
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "80px",
          }}
        >
          <ProjectCard key={index} project={project} />
        </SwiperSlide>
      ))}
    </SwiperRc>
  );
};
