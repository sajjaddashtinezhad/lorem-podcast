import React, { useState } from 'react';
import Bottom from "../images/bottom.svg";
import Header from "../components/header";
import Menu from "../components/menu";
import Footer from "../components/footer";
import { Link } from 'gatsby';
import Seo from '../components/seo'
import { StaticImage } from 'gatsby-plugin-image'

const About = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };

    return (
    <main>
      <div className="bg-zinc-900 font-peyda w-full h-svh md:h-screen p-6 md:p-16 flex flex-col justify-between" dir="rtl">
      <Header toggleMenu={toggleMenu} />
      <Menu menuOpen={menuOpen} toggleMenu={toggleMenu} />
      <div className='w-full flex flex-col md:flex-row gap-4 overflow-y-scroll md:h-96 my-8 rounded-xl overflow-hidden'>
                    <div className='bg-zinc-700 bg-opacity-50 text-white rounded-xl w-full md:w-1/2 px-6 pt-6 pb-9 md:overflow-y-scroll'>
                        <div className='flex gap-2 md:gap-4 md:items-center mb-5 flex-col md:flex-row'>
                            <StaticImage
                                alt="Bahare Nafari"
                                src="../images/Profile-Bahar.png"
                                className='w-28 h-28'
                            />
                            <div>
                                <h2 className='text-2xl font-bold mb-1'>
                                    بهاره نفری
                                </h2>
                                <span className='text-base text-zinc-400 font-normal'>
                                    متولد ۱۳۷۰ خورشیدی، ساکن تهران
                                </span>
                            </div>
                        </div>
                        <p className='mb-7'>
                            بخاطـر علاقه‌ی شـدید به کامپیوتـر از سال ۹۴ و اسـتعدادم، بـه صـورت حرفـه‌ای بـه گرافیـک بصـری و حـوزه‌ی طراحی وب و گرافیک پرداختـم و اکنون در طراحی گرافیک و بیشتر نرم افزارهای Adobe تسـلط دارم. شـغل مـن در حال حاضر مسـئول بخـش گرافیـک آرانیـک مدرس فتوشاپ و ایلوستریتور هستم و سـعی در افزایـش خدمـات گرافیکـی دارم. علی‌رغم اتمام تحصیلات کارشناسی در رشته‌ی گرافیک، یادگیری را هرگز تمام نکردم و همچنان به صورت روزانه سعی در بهبود توانایی‌های خود دارم.
                        </p>
                        <a href='https://instagram.com/baharenafari_designer?igshid=OGQ5ZDc2ODk2ZA==' className='bg-zinc-700 bg-opacity-50 py-3 px-5 rounded-md duration-200 hover:px-7 text-nowrap block md:inline'>
                            صفحه‌ی اینستاگرام
                        </a>
                    </div>
                    <div className='bg-zinc-700 bg-opacity-50 text-white rounded-xl w-full md:w-1/2 px-6 pt-6 pb-9 md:overflow-y-scroll'>
                        <div className='flex gap-2 md:gap-4 md:items-center mb-5 flex-col md:flex-row'>
                            <StaticImage
                                alt="Sajjad Dashti"
                                src="../images/Profile-Sajjad.png"
                                className='w-28 h-28'
                            />
                            <div>
                                <h2 className='text-2xl font-bold mb-1'>
سجاد دشتی
                                </h2>
                                <span className='text-base text-zinc-400 font-normal'>
متولد ۱۳۷۵ خورشیدی، ساکن رامسر
                                </span>
                            </div>
                        </div>
                        <p className='mb-7'>
                        متولد جنوب ایران، اسپرانتیست و عاشق کار گرافیکی هستم. از حدود سن ۱۰ سالگی شروع به کار گرافیکی کردم و در سال ۱۳۹۴ اولین کار جدی و حرفه‌ای خودم را برای مجله‌ی بین‌المللی Esperanto با قدمت ۱۰۰ سال انجام دادم. پس از آن برای مجلات مختلف بین‌المللی از جمله Umujo و La Lampiro کار کردم و در این بین همکاری‌هایی هم با خواننده و نقاش هلندی Rinzo داشتم. سپس برای مدت سه سال با یک شرکت هلندی در زمینه‌ی طراحی UI/UX کار کردم. اکنون بیش از هرچیز در حوزه‌ی کریپتو به عنوان طراح UI/UX و Illustrator فعالیت دارم.
                        </p>
                        <a href='https://instagram.com/sajjaddashtin?igshid=MzNlNGNkZWQ4Mg==' className='bg-zinc-700 bg-opacity-50 py-3 px-5 rounded-md duration-200 hover:px-7 text-nowrap block md:inline mb-4 md:mb-0'>
                            صفحه‌ی اینستاگرام
                        </a>
                        <a href='https://sajjaddashti.ir' className='bg-zinc-700 bg-opacity-50 md:mr-2 py-3 px-5 rounded-md duration-200 hover:px-7 text-nowrap block md:inline'>
                            وبسایت پورتفولیو
                        </a>
                    </div>
      </div>
      <Footer />
      </div>
      <div className="absolute bottom-0 w-full pointer-events-none">
        <img src={Bottom} alt="Bottom decoration" className="w-full object-cover h-60" />
      </div>
    </main>
    );
};



export default About;

export const Head = () => (
  <Seo 
    title='درباره‌ی ما'
    description='در پادکست لورم، با راهکارهای مختلف در رابطه با بازاریابی، تعامل با مشتری، بهبود کیفیت و سرعت کار و… آشنا شوید.'
  />
)