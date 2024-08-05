import{ headerLogo } from '../assets/images'
import { hamburger } from '../assets/icons'
import { navLinks } from '../constants'
const Nav = () => {
  return (
<header className='padding-x absolute z-10 w-full'>
        <nav className='flex justify-between items-center max-container'>
            <a href="/">
                <img src={headerLogo} alt='logo' width={100} height={30}></img>
            
            </a>
            <ul className='flex-1 flex justify-end items-center max-lg:hidden gap-14'>
                {navLinks.map((item) => (
                    <li key={item.label}>
                        <a href={item.href} className='font-montserrat leading-normal text-slate-gray'>
                        {item.label}
                        </a>
                    </li>
                ))}
            </ul>
            <div className=''>
                <img src={hamburger}
                alt='hambergur'
                width={25}
                height={25}></img>
            </div>
        </nav>
    </header>
      )
}

export default Nav