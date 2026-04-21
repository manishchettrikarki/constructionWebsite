"use client";

import { useState } from "react";
import { Subtitle } from "@/components/reusable/subtitle";

const reviews = [
  {
    name: "Vera Robinson",
    role: "Psychologist",
    avatar: "/img/avatars/female01.jpg",
    text: "Curabitur vitae nunc sed velit dignissim sodales ut. Maecenas ultricies mi eget mauris pharetra et. Et ligula ullamcorper malesuada proin pellentesque diam volutpat commodo.",
    rating: 5,
  },
  {
    name: "Benjamin Norris",
    role: "Business Analyst",
    avatar: "/img/avatars/male01.jpg",
    text: "Commodo quis imperdiet massa tincidunt nunc. Volutpat odio facilisis mauris sit amet. Mauris commodo quis imperdiet massa tincidunt.",
    rating: 5,
  },
  {
    name: "Lisa Smith",
    role: "Manager",
    avatar: "/img/avatars/female02.jpg",
    text: "Curabitur vitae nunc sed velit dignissim sodales ut. Maecenas ultricies mi eget mauris pharetra et. Et ligula ullamcorper malesuada proin pellentesque diam volutpat commodo.",
    rating: 5,
  },
  {
    name: "Lucas Perry",
    role: "Analyst",
    avatar: "/img/avatars/male02.jpg",
    text: "Commodo quis imperdiet massa tincidunt nunc. Volutpat odio facilisis mauris sit amet. Mauris commodo quis imperdiet massa tincidunt.",
    rating: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-[#ffc631]"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export function AboutReviewsSection() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((p) => (p === 0 ? reviews.length - 1 : p - 1));
  const next = () => setActive((p) => (p === reviews.length - 1 ? 0 : p + 1));

  // Show 2 cards on desktop, 1 on mobile
  const visible = [reviews[active], reviews[(active + 1) % reviews.length]];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <Subtitle>Our reviews</Subtitle>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1a2e]">
              What <span className="text-[#ffc631]">Our Clients</span> Say
            </h2>
          </div>

          {/* Arrow controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              aria-label="Previous review"
              className="flex items-center justify-center w-11 h-11 rounded-full border border-gray-200 text-gray-500 hover:border-[#ffc631] hover:text-[#ffc631] transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={next}
              aria-label="Next review"
              className="flex items-center justify-center w-11 h-11 rounded-full border border-gray-200 text-gray-500 hover:border-[#ffc631] hover:text-[#ffc631] transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          {visible.map((review, i) => (
            <div
              key={`${active}-${i}`}
              className="bg-gray-50 border border-gray-100 rounded-2xl p-8 flex flex-col gap-5"
            >
              <StarRating count={review.rating} />

              <p className="text-gray-600 leading-relaxed text-sm flex-1">
                &ldquo;{review.text}&rdquo;
              </p>

              <div className="flex items-center gap-4 pt-2 border-t border-gray-100">
                <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden shrink-0">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
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

        {/* Pagination dots */}
        <div className="flex justify-center gap-2 mt-10">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Go to review ${i + 1}`}
              className={`h-2.5 rounded-full transition-all duration-200 ${
                active === i
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
