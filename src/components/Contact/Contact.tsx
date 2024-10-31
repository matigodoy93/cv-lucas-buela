import { useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBehance, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';


export const Contact = () => {
  const contactRef = useRef<HTMLDivElement | null>(null);
  
  return (
    <section id="contact" ref={contactRef} className='bg-blue-900 p-4'>
      
      
        <p className="text-center text-xl mb-2">👋 ¡Gracias por pasar por aquí! Aquí hay más de mí si estás interesado</p>
        
        <div className="w-1/4 mx-auto">
          <div className="flex justify-center items-center">

            <a href="https://www.linkedin.com/in/lucas-buela-/" target="_blank" className="flex justify-center items-center w-10 h-10 overflow-hidden mx-auto rounded-full">
              <FontAwesomeIcon size="2xl" icon={faLinkedin} />
            </a>

            <a href="https://github.com/LucasBuela" target="_blank" className="flex justify-center items-center w-10 h-10 overflow-hidden mx-auto rounded-full">
              <FontAwesomeIcon size="2xl" icon={faGithub} />
            </a>

            <a href="https://www.behance.net/lukabuela" target="_blank" className="flex justify-center items-center w-10 h-10 overflow-hidden mx-auto rounded-full">
              <FontAwesomeIcon size="2xl" icon={faBehance} />
            </a>

            <a href="https://www.fiverr.com" target="_blank" className="flex justify-center items-center w-10 h-10 overflow-hidden mx-auto rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                <path d="M 25 2 C 12.309288 2 2 12.309297 2 25 C 2 37.690703 12.309288 48 25 48 C 37.690712 48 48 37.690703 48 25 C 48 12.309297 37.690712 2 25 2 z M 25 4 C 36.609833 4 46 13.390175 46 25 C 46 36.609825 36.609833 46 25 46 C 13.390167 46 4 36.609825 4 25 C 4 13.390175 13.390167 4 25 4 z M 26.5 11 C 21.579 11 18.409109 14.037 18.037109 19 L 14 19 L 14 25 L 18 25 L 18 36 L 24 36 L 24 25 L 28 25 L 28 36 L 34 36 L 34 19 L 24.066406 19 C 24.360406 17.001 25.579 17 26.5 17 L 29.03125 17 L 29.03125 11 L 26.5 11 z"></path>
              </svg>
            </a>

            <a href="https://www.instagram.com" target="_blank" className="flex justify-center items-center w-10 h-10 overflow-hidden mx-auto rounded-full">
              <FontAwesomeIcon size="2xl" icon={faInstagram} />
            </a>

          </div>
        </div>


    </section>
  )
}
