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
            <ul className='flex-1 flex justify-center items-center max-lg:hidden'>
                {navLinks.map((item) => (
                    <li key={item.label}>
                        <a href={item.href}>

                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    </header>
      )
}

export default Nav