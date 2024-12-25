import React from 'react';

// This component displays information about the user | Ini komponen yang menampilkan info tentang pengguna, bro!

export const About = () => {
  // This section is where the user's information is displayed | Ini bagian yang menampilkan info pengguna, gampang banget!
  return (
    <section id='about' className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-10 py-20">
      <div className="max-w-4xl text-center">
        <h2 className="text-4xl font-bold text-purple-500 mb-4">About YOU</h2>
        <p className="text-gray-300 text-lg">
         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo enim corporis delectus adipisci tempora laboriosam, aliquid incidunt eligendi amet consequatur. Porro vero ipsam libero cumque blanditiis. Impedit, quo inventore! Eaque!
        </p>
        <p className="text-gray-300 text-lg mt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, blanditiis?
        </p>
      </div>
    </section>
  );
};
