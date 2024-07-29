import{ headerLogo } from '../assets/images'
const Nav = () => {
  return (
<header className='padding-x '>
        <nav>
            <a href="/">
                <img src={headerLogo} alt='logo' width={100} height={30}></img>
            
            </a>
            
        </nav>
    </header>
      )
}

export default Nav