import React, { useState, useEffect } from 'react'; // Mengimpor React, useState, dan useEffect dari pustaka 'react'

const Nav = () => { // Membuat komponen Nav
  const [activeSection, setActiveSection] = useState(''); // Membuat state activeSection dengan useState dan memberikan nilai awal ''
  const [navM, setNavM] = useState(false); // Membuat state navM dengan useState dan memberikan nilai awal false

  useEffect(() => { // Menggunakan useEffect untuk menangani perubahan hash
    const handleHashChange = () => { // Membuat fungsi handleHashChange
      setActiveSection(window.location.hash || '#'); // Mengatur activeSection sesuai dengan hash saat ini atau '#' jika tidak ada hash
    };
    handleHashChange(); // Memanggil fungsi handleHashChange saat komponen pertama kali di-render
    window.addEventListener('hashchange', handleHashChange); // Menambahkan event listener untuk hashchange
    return () => window.removeEventListener('hashchange', handleHashChange); // Membersihkan event listener saat komponen di-unmount
  }, []); // Menggunakan array kosong sebagai dependensi, sehingga useEffect hanya dijalankan sekali saat komponen pertama kali di-render

  const navItems = [ // Membuat array navItems
    { label: 'Home', href: '#' }, // Item pertama dengan label 'Home' dan href '#'
    { label: 'About', href: '#about' }, // Item kedua dengan label 'About' dan href '#about'
    { label: 'Portfolio', href: '#portfolio' }, // Item ketiga dengan label 'Portfolio' dan href '#portfolio'
  ];

  return ( // Mengembalikan tampilan komponen Nav
    <nav className="fixed w-full z-50 flex justify-between items-center p-5 bg-transparent text-white">
      {/* Logo */}
      <div className="flex items-center"> 
        <h1 className="text-white text-3xl font-bold">Your Name</h1> 
      </div>

      {/* Navigation Links for Desktop */}
      <div className="hidden md:flex items-center"> 
        {navItems.map((item) => ( // Menggunakan map untuk membuat link navigasi
          <a key={item.href} href={item.href}> 
            <button // Membuat tag button
              className={`font-semibold text-white mx-5 hover:text-gray-500 ${ // Menambahkan class tertentu sesuai dengan kondisi
                activeSection === item.href ? 'border-b-2 border-white' : '' // Jika activeSection sama dengan href, tambahkan class 'border-b-2 border-white', jika tidak, biarkan kosong
              }`}
            >
              {item.label} 
            </button>
          </a>
        ))}
      </div>

      {/* Contact Button for Desktop || Membuat div dengan class tertentu*/ }
      <div className="hidden md:flex items-center">
        <button className="bg-white text-black rounded-lg p-2 px-4 hover:bg-gray-200"> {/*  Membuat tag button dengan class tertentu */}
          Contact {/*  Menampilkan teks 'Contact' */}
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center"> 
        <button
          onClick={() => setNavM(!navM)} // Menambahkan event onClick untuk mengubah nilai navM
          className="text-white text-xl focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {navM && ( // Menampilkan menu mobile jika navM bernilai true
        <div className="absolute top-16 right-0 w-3/4 h-screen bg-gray-900 bg-opacity-95 z-40 flex flex-col items-center p-5"> // Membuat div dengan class tertentu
          <button
            onClick={() => setNavM(false)} // Menambahkan event onClick untuk menutup menu mobile
            className="text-white text-2xl mb-5 self-end focus:outline-none"
          >
            ✕ 
          </button>
          {navItems.map((item) => ( // Menggunakan map untuk membuat link navigasi
            <a
              key={item.href}
              href={item.href}
              onClick={() => setNavM(false)} // Menambahkan event onClick untuk menutup menu mobile saat link diklik
              className={`w-full text-center py-3 text-white font-semibold text-lg hover:bg-gray-700 rounded-xl my-2 ${ // Menambahkan class tertentu sesuai dengan kondisi
                activeSection === item.href ? 'bg-gray-800' : '' // Jika activeSection sama dengan href, tambahkan class 'bg-gray-800', jika tidak, biarkan kosong
              }`}
            >
              {item.label} 
            </a>
          ))}
          <button onClick={()=> window.location.href = 'https://wa.me/62123456789'} className="mt-5 w-full bg-white text-black rounded-lg p-2 hover:bg-gray-200"> 
            Contact
          </button>
        </div>
      )}
    </nav>
  );
};

export default Nav; // Mengekspor komponen Nav
