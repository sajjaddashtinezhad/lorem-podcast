import React, { useState } from "react";
import Bottom from "../images/bottom.svg";
import Header from "../components/header";
import Menu from "../components/menu";
import Footer from "../components/footer";
import Scene from "../components/scene";
import { Link } from 'gatsby';
import Seo from '../components/seo'


const IndexPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  return (
    <main>
      <div className="bg-zinc-900 font-peyda w-full h-svh md:h-screen h-s p-6 md:p-16 flex flex-col justify-between" dir="rtl">
      <Header toggleMenu={toggleMenu} />
      <Menu menuOpen={menuOpen} toggleMenu={toggleMenu} />

      <Scene />

      <Link to="/episodes" className="md:hidden">
        <span className="text-sm md:text-base bg-zinc-700 bg-opacity-30 backdrop-filter backdrop-blur-md flex justify-center items-center rounded-2xl px-5 md:px-12 py-4 hover:scale-[0.95] duration-200 font-peyda font-bold text-white">
برای گوش دادن به پادکست کلیک کنید
        </span>
      </Link>

      <Footer />
      </div>
      <div className="hidden absolute bottom-16 md:bottom-28 w-full md:flex justify-center">
      <Link to="/episodes">
        <span className="text-sm md:text-base bg-zinc-700 bg-opacity-30 backdrop-filter backdrop-blur-md flex justify-center items-center rounded-2xl px-5 md:px-12 py-4 hover:scale-[0.95] duration-200 font-peyda font-bold text-white">
برای گوش دادن به پادکست کلیک کنید
        </span>
      </Link>
      </div>
      <div className="absolute bottom-0 w-full pointer-events-none">
        <img src={Bottom} alt="Bottom decoration" className="w-full object-cover h-60" />
      </div>
    </main>
  )
}

export default IndexPage

export const Head = () => (
  <Seo 
    title='لورم پادکست'
    description='در پادکست لورم، با راهکارهای مختلف در رابطه با بازاریابی، تعامل با مشتری، بهبود کیفیت و سرعت کار و… آشنا شوید.'
  />
)
