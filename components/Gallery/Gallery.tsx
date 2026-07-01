import { useEffect, useRef, useState } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { galleryData } from "../../utils/constants";
import SectionTitle from "../SectionTitle/SectionTitle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Gallery.css";

const Gallery = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [navElements, setNavElements] = useState<{
    prevEl: HTMLElement | null;
    nextEl: HTMLElement | null;
  }>({ prevEl: null, nextEl: null });

  useEffect(() => {
    if (prevRef.current && nextRef.current) {
      setNavElements({ prevEl: prevRef.current, nextEl: nextRef.current });
    }
  }, []);

  return (
    <section id="gallery" className="gallery">
      <SectionTitle
        title="Healing Moments Gallery"
        subtitle="Gallery"
        description="A visual journey through care, yoga, herbs and treatment spaces."
      />
      <div className="gallery__inner">
        <div className="gallery__toolbar">
          <p className="gallery__label">
            Masonry gallery with immersive details
          </p>
          <div className="gallery__nav-buttons">
            <button ref={prevRef} className="gallery__nav-button">
              <FiArrowLeft />
            </button>
            <button ref={nextRef} className="gallery__nav-button">
              <FiArrowRight />
            </button>
          </div>
        </div>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={navElements}
          pagination={{ clickable: true }}
          slidesPerView={1}
          spaceBetween={18}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {galleryData.map((item) => (
            <SwiperSlide key={item.title}>
              <div className="gallery-card">
                <img
                  src={item.image}
                  alt={item.title}
                  className="gallery-card__image"
                  loading="lazy"
                />
                <div className="gallery-card__body">
                  <p className="gallery-card__title">{item.title}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Gallery;
