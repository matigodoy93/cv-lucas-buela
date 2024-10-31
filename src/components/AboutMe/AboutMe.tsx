
export const AboutMe = () => {
  return (
    <section id="about" className='h-full px-8 mb-10 mt-10 md:mt-24'>
      
      <div className="md:flex md:flex-row">
        {/* Foto */}
        <div className="w-80 h-80 overflow-hidden mx-auto bg-red-700 rounded-full mb-6">
          <img className="w-full" src="https://as2.ftcdn.net/v2/jpg/04/10/43/77/1000_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg" alt="Lucas Gustavo Buela" />
        </div>

        {/* Texto */}
        <div className="w-full md:w-2/4 flex flex-col">
          <h2 className="text-center md:text-start text-6xl mb-8 uppercase">Sobre Mí</h2>
          <p className="text-xl text-center md:text-start leading-7">Hola,mi nombre es Lucas Gustavo Buela.Tengo
            30 años y me desempeño de forma freelancer
            como diseñador UX/UI, diseñador gráfico, Full
            Stack developer y Tester QA/Automation.
            Comence mi carrera a la edad de 26 años y
            aunque todavia no he podido integrarme de
            manera dependiente dentro de un equipo de
            desarrollo, cada uno de mis trabajos refleja y
            representa mi ilusion de formar parte de uno. 
          </p>
        </div>
      </div>

    </section>
  )
}
