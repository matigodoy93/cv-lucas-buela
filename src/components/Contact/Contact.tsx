import { useRef } from "react";

export const Contact = () => {
  const contactRef = useRef<HTMLDivElement | null>(null);
  
  return (
    <section id="contact" ref={contactRef} className='h-full w-full md:h-screen px-8 py-10 mb-10'>
      
      <div className="flex flex-col">

        <h2 className="text-center text-6xl mb-8 uppercase">Contacto</h2>
        
      </div>

    </section>
  )
}
