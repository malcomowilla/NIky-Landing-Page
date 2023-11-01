

import {headerLogo} from '../assets/images'
import {hamburger} from  '../assets/icons'


import { navLinks } from '../Constants'












const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full bg-blue-300">
        <nav className='flex justify-between items-center max-container'>
            <a href="/"> 
            
            <img src={headerLogo} alt='logo' width={130} height={29}></img>
            
            
            </a>
            <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
        {navLinks.map((link)=> {
            return <li key={link.label}>
                <a href={link.href} className='font-montserrat leading-normal 
                text-lg text-slate-gray'>
            {link.label}
                </a>
            </li>
        })}

            </ul>

            <div className='hidden max-lg:block'>
                <img src={hamburger} alt='hamburger' width={20} height={25}>
            


                </img>
            </div>
        </nav>

    </header>
  )
}

export default Nav















