import React from 'react';

// Footer component | Komponen Footer
const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-8 px-5">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Brand Section | Bagian Brand */}
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold text-white"> Project</h2>
          <p className="text-sm text-gray-400">Empowering the future with innovation. | Membantu masa depan dengan inovasi.</p>
        </div>

        {/* Links Section | Bagian Tautan */}
        <div className="flex flex-col md:flex-row gap-6 text-center md:text-left">
          <div>
            <h4 className="text-lg font-semibold text-white">Quick Links | Tautan Cepat</h4>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="#" className="hover:text-purple-500 transition duration-300">
                  Home | Beranda
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-purple-500 transition duration-300">
                  About | Tentang
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-purple-500 transition duration-300">
                  Portfolio | Portofolio
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-purple-500 transition duration-300">
                  Contact | Kontak
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white">Follow Us | Ikuti Kami</h4>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="#" className="hover:text-purple-500 transition duration-300">
                  Twitter | Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-500 transition duration-300">
                  Facebook | Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-500 transition duration-300">
                  Instagram | Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-500 transition duration-300">
                  LinkedIn | LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section | Bagian Hak Cipta */}
        <div className="mt-6 md:mt-0 text-sm text-center md:text-right">
          <p>© 2024 Fariz Project. All rights reserved. | © 2024 Proyek Fariz. Semua hak cipta dilindungi.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
