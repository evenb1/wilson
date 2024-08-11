import { headerLogo } from "../assets/images";
import { socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={headerLogo} width={150} height={46} alt="Wilson Logo" />
          </a>
          <p>Unlock your full potential on the court with Wilson's premium tennis rackets.</p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon, index) => (
              <a
                key={index}
                href={icon.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center w-12 h-12 rounded-full bg-white"
              >
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
