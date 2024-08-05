import { headerLogo } from '../assets/images';
import { navLinks } from '../constants';
import { hamburger } from '../assets/icons';
const Nav = () => {
  return (
    <header className='padding-x absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href="/">
          <img src={headerLogo} alt='logo' width={100} height={30} />
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
        <div className='hidden max-lg:block'>
          <img src={hamburger} alt='hamburger' width={25} height={25} />
        </div>
      </nav>
    </header>
  );
}

export default Nav;
