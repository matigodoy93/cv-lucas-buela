import { useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBehance, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from "react-i18next";


export const Contact = () => {
  const contactRef = useRef<HTMLDivElement | null>(null);
  const { t } = useTranslation();
  
  return (
    <section id="contact" ref={contactRef} className='bg-blue-900 py-10'>
      
        <p className="text-center text-xl mb-8 mx-6 md:text-2xl lg:mx-0">👋 { t('thanks') }</p>
        
        <div className="w-3/4 lg:w-2/4 mx-auto">
          <div className="flex md:justify-center">

            <div className="flex items-center">
              <a href="https://www.linkedin.com/in/lucas-buela-/" target="_blank" className="overflow-hidden mx-4">
                <FontAwesomeIcon className="text-4xl md:text-6xl" icon={faLinkedin} />
              </a>
            </div>

            <div className="flex items-center">
              <a href="https://github.com/LucasBuela" target="_blank" className="overflow-hidden mx-4">
                <FontAwesomeIcon className="text-4xl md:text-6xl" icon={faGithub} />
              </a>
            </div>

            <div className="flex items-center">
              <a href="https://www.behance.net/lukabuela" target="_blank" className="overflow-hidden mx-4">
                <FontAwesomeIcon className="text-4xl md:text-6xl" icon={faBehance} />
              </a>
            </div>

            <div className="flex items-center">
              <a href="https://www.fiverr.com" target="_blank" className="overflow-hidden mx-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" x="0px" y="0px" width="35" height="35" viewBox="0 0 50 50">
                  <path d="M 25 2 C 12.309288 2 2 12.309297 2 25 C 2 37.690703 12.309288 48 25 48 C 37.690712 48 48 37.690703 48 25 C 48 12.309297 37.690712 2 25 2 z M 25 4 C 36.609833 4 46 13.390175 46 25 C 46 36.609825 36.609833 46 25 46 C 13.390167 46 4 36.609825 4 25 C 4 13.390175 13.390167 4 25 4 z M 26.5 11 C 21.579 11 18.409109 14.037 18.037109 19 L 14 19 L 14 25 L 18 25 L 18 36 L 24 36 L 24 25 L 28 25 L 28 36 L 34 36 L 34 19 L 24.066406 19 C 24.360406 17.001 25.579 17 26.5 17 L 29.03125 17 L 29.03125 11 L 26.5 11 z"></path>
                </svg>
              </a>
            </div>

            <div className="flex items-center">
              <a href="https://www.instagram.com" target="_blank" className="overflow-hidden mx-4">
                <FontAwesomeIcon className="text-4xl md:text-6xl" icon={faInstagram} />
              </a>
            </div>

          </div>
        </div>


    </section>
  )
}
