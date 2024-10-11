import React from 'react';

const Footer = () => {
    return (
        <footer className="hidden md:flex flex-row justify-between items-center">
        <div className="text-rtl">
          <span className="text-zinc-500 text-base">
          ارتباط با ما
          </span>
          <a href="mailto:info@lorempodcast.ir" className="block text-white text-base hover:text-zinc-300 duration-300">
            info@lorempodcast.ir
          </a>
        </div>
        <div className="" dir="ltr">
          <span className="text-zinc-500 text-base">
          لورم پادکست در شبکه‌های اجتماعی
          </span>
          <div className="flex gap-2">
            <a href="https://instagram.com/lorempodcast?igshid=MzNlNGNkZWQ4Mg==" className="text-white text-base hover:text-zinc-300 duration-300">
              اینستاگرام
            </a>
            <span className="text-white text-base">|</span>
            <a href="https://t.me/lorempodcast" className="text-white text-base hover:text-zinc-300 duration-300">
              تلگرام                
            </a>
          </div>
        </div>
    </footer>
    );
};

export default Footer;