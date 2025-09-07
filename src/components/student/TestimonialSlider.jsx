import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useSelector } from "react-redux";

gsap.registerPlugin(ScrollTrigger);

const TestimonialSlider = () => {
  const testimonials = useSelector((state) => state.counter.testimonialsdata);
  const containerRef = useRef(null);



  return (
    <div
      ref={containerRef}
      className="testimonial-slider  flex gap-6 p-4  scrollbar-hide flex-wrap items-center justify-center "
    >
      {testimonials.map((t, index) => (
        <div
          key={index}
          className="testimonial-card bg-white rounded-lg shadow-md p-4 w-[320px] md:w-[260px] flex flex-col items-center text-center transform hover:translate-y-5 transition-all duration-200"
        >
          <img
            src={t.image}
            alt={t.name}
            className="avatar w-16 h-16 rounded-full object-cover mb-2"
          />
          <h3 className="text-lg font-semibold text-black/70 mb-1">{t.name}</h3>
          <p className="role text-sm text-gray-500">{t.role}</p>
          <p className="rating flex items-center gap-1 mt-1">
            {[...Array(Math.round(t.rating))].map((_, i) => (
              <span key={i}>⭐</span>
            ))}
          </p>
          <blockquote className="mt-2 italic text-gray-700">
            "{t.feedback}"
          </blockquote>
        </div>
      ))}
    </div>
  );
};

export default TestimonialSlider;