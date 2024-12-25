import React from 'react' // Mengimpor React dari pustaka 'react' | Importing React from the 'react' library
import Card from './Card'; // Mengimpor komponen Card dari file './Card' | Importing the Card component from the './Card' file
const cards = [ // Membuat array cards untuk menyimpan data kartu | Creating an array of cards to store card data
    {
      image: 'https://vida.id/hubfs/Perbedaan%20Hacker%20dan%20Cracker.jpg', // Menambahkan item pertama ke array cards dengan properti image | Adding the first item to the cards array with the image property
      title: 'Card 1', // Menambahkan item pertama ke array cards dengan properti title | Adding the first item to the cards array with the title property
      description: // Menambahkan item pertama ke array cards dengan properti description | Adding the first item to the cards array with the description property
        ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste minus qui ipsam. Aliquid, esse nulla. Quaerat unde iusto doloribus quia natus obcaecati pariatur! Molestias consequatur rerum esse odit quae possimus.',
    },
    {
      image: 'https://b.acaraseru.com/images/dd405e50-e018-4f74-85be-afe586cb1aeb/l-ilustrasi-hacker.jpg', // Menambahkan item kedua ke array cards dengan properti image | Adding the second item to the cards array with the image property
      title: 'Card 2', // Menambahkan item kedua ke array cards dengan properti title | Adding the second item to the cards array with the title property
      description: // Menambahkan item kedua ke array cards dengan properti description | Adding the second item to the cards array with the description property
        ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste minus qui ipsam. Aliquid, esse nulla. Quaerat unde iusto doloribus quia natus obcaecati pariatur! Molestias consequatur rerum esse odit quae possimus.',
    },
    {
      image: 'https://vida.id/hubfs/Perbedaan%20Hacker%20dan%20Cracker.jpg', // Menambahkan item ketiga ke array cards dengan properti image | Adding the third item to the cards array with the image property
      title: 'Card 1', // Menambahkan item ketiga ke array cards dengan properti title | Adding the third item to the cards array with the title property
      description: // Menambahkan item ketiga ke array cards dengan properti description | Adding the third item to the cards array with the description property
        ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste minus qui ipsam. Aliquid, esse nulla. Quaerat unde iusto doloribus quia natus obcaecati pariatur! Molestias consequatur rerum esse odit quae possimus.',
    },
    {
      image: 'https://b.acaraseru.com/images/dd405e50-e018-4f74-85be-afe586cb1aeb/l-ilustrasi-hacker.jpg', // Menambahkan item keempat ke array cards dengan properti image | Adding the fourth item to the cards array with the image property
      title: 'Card 2', // Menambahkan item keempat ke array cards dengan properti title | Adding the fourth item to the cards array with the title property
      description: // Menambahkan item keempat ke array cards dengan properti description | Adding the fourth item to the cards array with the description property
        ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste minus qui ipsam. Aliquid, esse nulla. Quaerat unde iusto doloribus quia natus obcaecati pariatur! Molestias consequatur rerum esse odit quae possimus.',
    },
    {
      image: 'https://vida.id/hubfs/Perbedaan%20Hacker%20dan%20Cracker.jpg', // Menambahkan item kelima ke array cards dengan properti image | Adding the fifth item to the cards array with the image property
      title: 'Card 1', // Menambahkan item kelima ke array cards dengan properti title | Adding the fifth item to the cards array with the title property
      description: // Menambahkan item kelima ke array cards dengan properti description | Adding the fifth item to the cards array with the description property
        ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste minus qui ipsam. Aliquid, esse nulla. Quaerat unde iusto doloribus quia natus obcaecati pariatur! Molestias consequatur rerum esse odit quae possimus.',
    },
    {
      image: 'https://b.acaraseru.com/images/dd405e50-e018-4f74-85be-afe586cb1aeb/l-ilustrasi-hacker.jpg', // Menambahkan item keenam ke array cards dengan properti image | Adding the sixth item to the cards array with the image property
      title: 'Card 2', // Menambahkan item keenam ke array cards dengan properti title | Adding the sixth item to the cards array with the title property
      description: // Menambahkan item keenam ke array cards dengan properti description | Adding the sixth item to the cards array with the description property
        ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste minus qui ipsam. Aliquid, esse nulla. Quaerat unde iusto doloribus quia natus obcaecati pariatur! Molestias consequatur rerum esse odit quae possimus.',
    },
    {
      image: 'https://vida.id/hubfs/Perbedaan%20Hacker%20dan%20Cracker.jpg', // Menambahkan item ketujuh ke array cards dengan properti image | Adding the seventh item to the cards array with the image property
      title: 'Card 1', // Menambahkan item ketujuh ke array cards dengan properti title | Adding the seventh item to the cards array with the title property
      description: // Menambahkan item ketujuh ke array cards dengan properti description | Adding the seventh item to the cards array with the description property
        ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste minus qui ipsam. Aliquid, esse nulla. Quaerat unde iusto doloribus quia natus obcaecati pariatur! Molestias consequatur rerum esse odit quae possimus.',
    },
    {
      image: 'https://b.acaraseru.com/images/dd405e50-e018-4f74-85be-afe586cb1aeb/l-ilustrasi-hacker.jpg', // Menambahkan item kedelapan ke array cards dengan properti image | Adding the eighth item to the cards array with the image property
      title: 'Card 2', // Menambahkan item kedelapan ke array cards dengan properti title | Adding the eighth item to the cards array with the title property
      description: // Menambahkan item kedelapan ke array cards dengan properti description | Adding the eighth item to the cards array with the description property
        ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste minus qui ipsam. Aliquid, esse nulla. Quaerat unde iusto doloribus quia natus obcaecati pariatur! Molestias consequatur rerum esse odit quae possimus.',
    },
  ];


const Portfolio = () => { // Membuat komponen Portfolio | Creating the Portfolio component
  return ( // Mengembalikan tampilan komponen Portfolio | Returning the Portfolio component's view
        <>
       

        <div id='portfolio' className="flex flex-wrap gap-6 justify-center items-center bg-black min-h-screen p-10">
      {cards.map((card, index) => ( // Menggunakan map untuk membuat Card dari setiap item di array cards | Using map to create a Card from each item in the cards array
        <Card // Membuat komponen Card | Creating the Card component
          key={index} // Menambahkan properti key dengan nilai index | Adding the key property with the index value
          image={card.image} // Menambahkan properti image dengan nilai card.image | Adding the image property with the card.image value
          title={card.title} // Menambahkan properti title dengan nilai card.title | Adding the title property with the card.title value
          description={card.description} // Menambahkan properti description dengan nilai card.description | Adding the description property with the card.description value
        />
      ))}
    </div>


        </>
  )
}

export default Portfolio // Mengekspor komponen Portfolio | Exporting the Portfolio component