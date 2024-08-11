import { headerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer id="contact-us" className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap ">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={headerLogo} width={150} height={46} alt="Wilson Logo" />
          </a>
          <p className="text-white-400 mt-[-30px] text-base leading-7 font-montserrat sm:max-w-sm">Unlock your full potential on the court with Wilson's premium tennis rackets.</p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon, index) => (
              <a
                key={index}
                href={icon.href}
                
                className="flex justify-center items-center w-12 h-12 rounded-full bg-white"
              >
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </a>
            ))}
          </div>
          
        </div>
        <div className="flex flex-1 justify-end pt-10 pr-20 max-sm:pt-0 max-sm:flex-col max-sm:justify-between max-sm:gap-10 lg:gap-20 gap-30 flex-wrap">
            {footerLinks.map((section)=>(
              <div>
              <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">
                {section.title}
              </h4>
              <ul className="text-white ">
                {section.links.map((link)=>(
                  <li key={link.name} className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer">
                    <a>{link.name}</a>
                  </li>
                ))}
              </ul>
              </div>
            ))}

          </div>
      </div>
      <div className="justify-center">
        <p className="text-white-400 font-montserrat text-[12px] pt-10 font-light text-end">©2024 Wilson Sporting Goods All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
