"use client";

import { Subtitle } from "@/components/reusable/subtitle";
import { REVIEWS } from "@/contents/aboutPage";
import { ArrowLeftIcon, ArrowRightIcon } from "@/icons";
import { getInitials } from "@/utils/getInitials";
import { StarRating } from "@/utils/starRating";
import { useState } from "react";


// 
export function AboutReviewsSection() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((p) => (p === 0 ? REVIEWS.length - 1 : p - 1));
  const next = () => setActive((p) => (p === REVIEWS.length - 1 ? 0 : p + 1));

  const visible = [REVIEWS[active], REVIEWS[(active + 1) % REVIEWS.length]];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <Subtitle>Client Testimonials</Subtitle>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1a2e]">
              What Our <span className="text-[#ffc631]">Clients Say</span>
            </h2>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              aria-label="Previous review"
              className="flex items-center justify-center w-11 h-11 rounded-full border border-gray-200 text-gray-500 hover:border-[#ffc631] hover:text-[#ffc631] transition-colors"
            >
              <ArrowLeftIcon className="w-4 h-4" />
            </button>
            <button
              onClick={next}
              aria-label="Next review"
              className="flex items-center justify-center w-11 h-11 rounded-full border border-gray-200 text-gray-500 hover:border-[#ffc631] hover:text-[#ffc631] transition-colors"
            >
              <ArrowRightIcon className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Review Cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          {visible.map((review, i) => (
            <div
              key={`${active}-${i}`}
              className="bg-white border border-gray-100 rounded-2xl p-8 flex flex-col gap-5"
            >
              <StarRating count={review.rating} />

              <p className="text-gray-600 leading-relaxed text-sm flex-1">
                &ldquo;{review.text}&rdquo;
              </p>

              <div className="flex items-center gap-4 pt-2 border-t border-gray-100">
                <div className="w-12 h-12 rounded-full bg-[#1a1a2e] overflow-hidden shrink-0 flex items-center justify-center text-white font-bold text-lg">
                  {getInitials(review.name)}
                </div>
                <div>
                  <p className="text-[#1a1a2e] font-bold text-sm">
                    {review.name}
                  </p>
                  <p className="text-gray-400 text-xs">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-2 mt-10">
          {REVIEWS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Go to review ${i + 1}`}
              className={`h-2.5 rounded-full transition-all duration-200 ${active === i
                ? "bg-[#ffc631] w-6"
                : "bg-gray-300 w-2.5 hover:bg-gray-400"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
