import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function LSI_Footer() {
  return (
    <div className="w-full bg-background border-t-2 border-t-white text-white px-10">
      <div className="max-w-7xl flex flex-col sm:flex-row py-4 mx-auto justify-between items-center">
        <div className="text-center">
          <div>
            Copyright ©2024 <strong>SimStock-Exchange</strong>.
          </div>
        </div>
        <div className="text-center text-xl text-white mb-2">
          <a href="#" className="w-10 h-10 rounded-full bg-white hover:bg-gray-400 mx-1 inline-block pt-1">
            <FontAwesomeIcon icon={faTwitter} className="text-blue-500" />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-white hover:bg-gray-400 mx-1 inline-block pt-1">
            <FontAwesomeIcon icon={faInstagram} className="text-pink-500" />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-white hover:bg-gray-400 mx-1 inline-block pt-1">
            <FontAwesomeIcon icon={faFacebookF} className="text-blue-600" />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-white hover:bg-gray-400 mx-1 inline-block pt-1">
            <FontAwesomeIcon icon={faLinkedin} className="text-blue-700" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default LSI_Footer;



