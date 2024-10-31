
export const AboutMe = () => {
  return (
    <section id="about" className='h-screen px-6 bg-green-600'>
      
      {/* Foto */}
      <div className="w-80 h-80 mx-auto bg-slate-700 rounded-full mb-6">
        {/* <img src="" alt="" /> */}
      </div>

      {/* Texto */}
      <div className="flex flex-col">
        <h2 className="text-center text-6xl mb-8">Sobre Mí</h2>
        <p className="text-xl text-center leading-7">Hola,mi nombre es Lucas Gustavo Buela.Tengo
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

    </section>
  )
}
