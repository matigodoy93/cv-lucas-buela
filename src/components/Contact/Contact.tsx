import { useRef } from "react";

export const Contact = () => {
  const contactRef = useRef<HTMLDivElement | null>(null);
  
  return (
    <section id="contact" ref={contactRef} className='bg-black p-2'>
      
      <div className="">
      
        <p className="text-center text-xl">👋 ¡Gracias por pasar por aquí! Aquí hay más de mí si estás interesado</p>
        
        <div className="flex justify-between">

        <div className="flex space-x-4">
          <a href="https://www.linkedin.com" target="_blank" className="w-10 h-10 overflow-hidden mx-auto bg-gray-500 rounded-full mb-6">
            <i className="fa-brands fa-linkedin-in"></i>
            {/* <img src="" alt="LinkedIn" className="w-full" /> */}
          </a>
          <a href="https://www.github.com" target="_blank" className="w-10 h-10 overflow-hidden mx-auto bg-gray-500 rounded-full mb-6">
            {/* <img src="" alt="GitHub" className="w-full" /> */}
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://www.behance.net" target="_blank" className="w-10 h-10 overflow-hidden mx-auto bg-gray-500 rounded-full mb-6">
            {/* <img src="" alt="Behance" className="w-full" /> */}
            <i className="fa-brands fa-behance"></i>
          </a>
          <a href="https://www.fiverr.com" target="_blank" className="w-10 h-10 overflow-hidden mx-auto bg-gray-500 rounded-full mb-6">
            {/* <img src="" alt="Fiverr" className="w-full" /> */}
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" className="w-10 h-10 overflow-hidden mx-auto bg-gray-500 rounded-full mb-6">
            <img src="" alt="Instagram" className="w-full" />
          </a>
        </div>


        </div>
      
      </div>

    </section>
  )
}
