
export const Education = () => {
  return (
    <section id="education" className="h-screen px-6 mb-10">

      {/* Texto */}
      <div className="flex flex-col mb-6">
        <h2 className="text-center text-6xl mb-8">Educación</h2>

        <div className="mb-4">
          <h4 className="text-2xl text-center mb-2 leading-6">Escuela de Arte Multimedial "Da Vinci"</h4>
          <p className="text-xl text-center leading-6">Analista de sistemas/Diseñador UX/UI |
          2021-En curso</p>
        </div>

        <div className="">
          <h4 className="text-2xl text-center mb-2 leading-6">Educacion IT</h4>
          <p className="text-xl text-center leading-6">Tester QA Manual/Automation Selenium | 2023 (Finalizado)</p>
        </div>

      </div>

      {/* Certificados */}
      <div className="w-full flex flex-col items-center">
        <div className="bg-red-500 w-80 h-60 mb-6 rounded-xl">
          {/* <img src="" alt="Certificado de aprobación en Educación IT" /> */}
        </div>
        <div className="bg-red-800 w-80 h-60 rounded-xl">
          {/* <img src="" alt="Certificado de asistencia en Educación IT" /> */}
        </div>
      </div>
      
    </section>
  )
}
