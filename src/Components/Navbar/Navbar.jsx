import React from 'react'
import { headerLogo } from '../../assets/images';
import { hamburger } from '../../assets/icons'
import { navLinks } from '../../constants/index'

const Navbar = () => {
  return (

    <header className='padding-x absolute py-8 z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href="/">
          <img src={headerLogo} alt="logo"
            height={29}
            width={130}
            className='m-0 w-[129px] h-[29px]'
          />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {
            navLinks.map((link) => {
              return (
                <>
                  <li key={link.label}>
                    <a href={link.href}
                      className='font-montserrat leading-normal text-lg text-slate-gray'>
                      {link.label}
                    </a>
                  </li>
                </>
              )
            })
          }
        </ul>
        <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
          <a href='/'>Sign in</a>
          <span>/</span>
          <a href='/'>Explore now</a>
        </div>
        <div  className='hidden max-lg:block'>
          <img src={hamburger} width={25} height={25} alt=""  />
        </div>
      </nav>
    </header>

  )
}

export default Navbar
