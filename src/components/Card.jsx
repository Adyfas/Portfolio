import React from 'react';

// Komponen Card yang menampilkan gambar, judul, dan deskripsi
const Card = ({ image, title, description }) => {
  return (
    <div className="relative group w-80 h-96 rounded-lg overflow-hidden shadow-lg">
      {/* Full-Card Photo */}
      {/* Foto Full-Card */}
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Overlay for title & description */}
      {/* Overlay untuk judul & deskripsi */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>

      {/* Title */}
      {/* Judul */} 
      <div
        className="absolute bg-black bg-opacity-70 p-4 rounded-lg z-20 
          transition-all duration-500 w-full group-hover:top-0 group-hover:bottom-0 group-hover:overflow-y-scroll"
      >
        <h3 className="text-lg font-bold text-white group-hover:mb-4">
          {title}
        </h3>
        <p
          className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
