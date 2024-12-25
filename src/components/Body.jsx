import React from 'react'

// Array of project cards | Array kartu projek
const cards = [
    {
      title: 'Projek',
      subtitle: 'Hacker',
      description:
        'Sedang memperluas aksesibilitas digital melalui ide-ide inovatif terkini.',
      image: 'https://blob.cloudcomputing.id/images/9bdd42f5-25f6-478c-89ea-7390ef5b9b07/ilustrasi-hacker-2-l-min.jpg',
    },
    {
      title: 'Projek',
      subtitle: 'Hacker',
      description:
        'Mengintegrasikan solusi AI dalam proses desain modern dengan teknologi canggih.',
      image: 'https://www.bca.co.id/-/media/Feature/News/Awas-Modus/2022/10/20221005-pengertian-hacker-dan-tindakan-yang-perlu-diwaspadai-banner.jpg',
    },
    {
      title: 'Projek',
      subtitle: 'Hacker',
      description:
        'Menyajikan proses visual interaktif dengan konsep futuristik terbaru.',
      image: 'https://vida.id/hubfs/Perbedaan%20Hacker%20dan%20Cracker.jpg',
    },
    {
      title: 'Projek',
      subtitle: 'Hacker',
      description:
        'Membangun layanan teknologi berbasis pengembangan AI yang terintegrasi.',
      image: 'https://b.acaraseru.com/images/dd405e50-e018-4f74-85be-afe586cb1aeb/l-ilustrasi-hacker.jpg',
    },
  ];

// Body component | Komponen Body
const Body = () => {
  return (
    <section className="flex flex-col lg:flex-row bg-black text-white min-h-screen">
    {/* Left Side - Welcome Section | Sisi Kiri - Bagian Selamat Datang */}
    <div className="flex-1 flex flex-col justify-center items-start p-10 lg:p-20 relative">
      {/* Background Pattern | Pola Latar Belakang */}
      <div className="absolute inset-0 bg-[url('/path-to-circuit-pattern.svg')] bg-cover opacity-20 z-0"></div>
      <div className="relative z-10 max-md:my-14">
        <h1 className="text-6xl font-bold leading-tight">
            YOUR NAME <br />
          <span className="text-purple-500">your name</span>
        </h1>
        <p className="mt-6 text-gray-300 text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dolor similique perspiciatis maiores tempore! Alias tempora aliquid sint temporibus sed odio, repellat et rem sit molestiae autem excepturi eveniet itaque.
        </p>
        <div className="mt-8 flex gap-4">
          <button className="bg-white text-black font-medium rounded-full px-8 py-2 hover:bg-gray-200 transition">
                CV
          </button>
          <button className="border border-white text-white font-medium rounded-full px-8 py-2 hover:bg-gray-700 transition">
            Contact
          </button>
        </div>
      </div>
    </div>

    {/* Right Side - Portfolio Cards | Sisi Kanan - Kartu Portofolio */}
    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 p-10 lg:p-20 ">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-black border border-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform p-4"
        >
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-40 object-cover"
          />
            <h2 className="text-lg font-bold text-purple-500">{card.title}</h2>
            <h3 className="text-white font-semibold">{card.subtitle}</h3>

          </div>
      ))}
    </div>
  </section>
  )
}

export default Body