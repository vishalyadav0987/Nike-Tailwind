import React from 'react';
import { footerLogo } from '../../assets/images';
import { footerLinks, socialMedia } from '../../constants';
import { copyrightSign } from '../../assets/icons';

const Footer = () => {
  return (
    <footer className='max-container'>
      <div className='flex items-start justify-between flex-wrap max-lg:flex-col'>
        {/* Logo and Description Section */}
        <div className='flex flex-col items-start'>
          <a href="/">
            <img
              src={footerLogo}
              width={150}
              height={46}
              className='object-contain'
              alt="Footer Logo"
            />
          </a>
          <p className='mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui commodi eveniet 
            exercitationem quae cum perferendis quasi quibusdam ullam velit ducimus, nobis 
            dicta non molestias sapiente praesentium temporibus tempore animi eos!
          </p>
          <div className='flex items-center gap-5 mt-8'>
            {socialMedia.map((icon, index) => (
              <div
                key={index}
                className='flex h-12 w-12 justify-center items-center rounded-full bg-white'
              >
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>

        {/* Links Section */}
        <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap mt-12'>
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className='text-white font-montserrat text-2xl leading-normal font-medium mb-6'>
                {section.title}
              </h4>
              <ul>
                {section.links.map((link, linkIndex) => (
                  <li
                    key={linkIndex}
                    className='mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer'
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className='flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center'>
        <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer'>
          <img src={copyrightSign} alt="" width={20} height={20} className='rounded-full m-0'/>
          <p>Copyright. All right reserverd.</p>
        </div>
        <p className='font-montserrat cursor-pointer'>Terms and Conditions.</p>
      </div>
    </footer>
  );
};

export default Footer;
