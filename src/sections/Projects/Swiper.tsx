// import Swiper core and required modules
import { Pagination } from "swiper/modules";

import { Swiper as SwiperRc, SwiperSlide } from "swiper/react";

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
      modules={[Pagination]}
      slidesPerView={1}
      style={{ width: "100%", height: "100%" }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      centeredSlidesBounds={true}
      centeredSlides={true}
    >
      {Projects.map((project, index) => (
        <SwiperSlide>
          <ProjectCard key={index} project={project} />
        </SwiperSlide>
      ))}
    </SwiperRc>
  );
};
