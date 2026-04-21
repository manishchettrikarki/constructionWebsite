const galleryItems = [
  {
    img: "/img/gallery/10.jpg",
    caption: "Fresh Concept Construction Renovation",
    label: "Special Projects",
  },
  {
    img: "/img/gallery/08.jpg",
    caption: "Jazzy Elite Shopping Center",
    label: "Special Projects",
  },
  {
    img: "/img/gallery/02.jpg",
    caption: "Installation a Supply System",
    label: "Industrial",
  },
  {
    img: "/img/gallery/09.jpg",
    caption: "Reconstruction of Old Factory",
    label: "Restoration",
  },
];

export function ServicesGallerySection() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4">
      {galleryItems.map((item, i) => (
        <div
          key={i}
          className="relative h-64 sm:h-80 overflow-hidden group cursor-pointer bg-gray-900"
        >
          <img
            src={item.img}
            alt={item.caption}
            className="w-full h-full object-cover opacity-70 group-hover:opacity-40 group-hover:scale-110 transition-all duration-500"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
          <div className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#ffc631] mb-1">
              Our gallery
            </span>
            <h4 className="text-white font-bold text-sm leading-snug">
              {item.caption}
            </h4>
            <span className="text-gray-300 text-xs mt-1">{item.label}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
