// Importing necessary components and assets, bro!
import { useState } from 'react' // We're using useState to manage our state, fam! | Menggunakan useState untuk mengatur state, bro!
import reactLogo from './assets/react.svg' // This is the React logo, duh! | Ini logo React, ya!
import viteLogo from '/vite.svg' // And this is the Vite logo, btw! | Dan ini logo Vite, btw!
import './App.css' // This is where our styling magic happens, bruh! | Ini tempat kita membuat styling, bro!
import Nav from './components/Nav' // This is our navigation component, easy peasy! | Ini komponen navigasi kita, gampang banget!
import Body from './components/Body' // This is the body of our app, the main event! | Ini bagian tubuh aplikasi kita, yang utama!
import { About } from './components/About' // This is where we talk about ourselves, lol! | Ini tempat kita ngomongin tentang diri kita sendiri, haha!
import Portfolio from './components/Portfolio' // This is where we show off our skills, yaaas! | Ini tempat kita pamerin skill kita, yaaas!
import Footer from './components/Footer' // And this is the footer, the grand finale! | Dan ini footer, penutup yang keren!

function App() {
  // We're using useState to manage our state, remember? | Kita menggunakan useState untuk mengatur state, ingat?
  const [count, setCount] = useState(0)

  // Now we're rendering all our components, woohoo! | Sekarang kita render semua komponen, woohoo!
  return (
    <>

      <main className='bg-black h-screen'>
        <Nav/> {/*  Rendering our navigation component, easy! | Render komponen navigasi kita, gampang! */}
        <Body/>  {/*  Rendering our body component, the main event! | Render komponen tubuh kita, yang utama! */} 
        <About/> {/* Rendering our about component, lol! | Render komponen tentang kita, haha! */} 
        <Portfolio/>{/* Rendering our portfolio component, yaaas! | Render komponen portofolio kita, yaaas! */} 
        <Footer/> {/*  Rendering our footer component, the grand finale! | Render komponen footer kita, penutup yang keren! */}
      </main>

    </>
  )
}

export default App
