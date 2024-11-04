import { useTranslation } from 'react-i18next';
import image1 from "../assets/images/project-valiant/1.png";
import image2 from "../assets/images/project-valiant/2.png";
import image3 from "../assets/images/project-valiant/3.png";
import image4 from "../assets/images/project-valiant/4.jpg";
import image5 from "../assets/images/project-valiant/5.jpg";
import image6 from "../assets/images/project-valiant/6.jpg";
import { ProjectHeader } from '../components/ProjectHeader/ProjectHeader';
import { ProjectInfo } from '../components/ProjectInfo/ProjectInfo';
import { useEffect, useState } from 'react';
import { Spinner } from '../components/Spinner/Spinner';

export const Valiant = () => {
  
  const { t } = useTranslation();
  
  const [ fakeSpinner, setFakeSpinner]  = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setFakeSpinner(false);
    }, 2000);
  }, [])
    
  if(fakeSpinner) {
      return <Spinner />
  }

  return (
    <div className="mt-10 md:mt-24">
      <ProjectHeader title="Valiant" />

      <div className="px-10 md:px-20 lg:px-40">
        <h2 className='font-bold text-center mb-8 text-5xl uppercase md:text-7xl lg:text-start lg:text-7xl lg:hidden'>Valiant</h2>

        <ProjectInfo
        isImageFirst={true}
        image={image1}
        subtitle={ t('valiant.valiant1') }
        text={ t('valiant.valiant1Text') }
        />

        {/* ============= Decisiones de Diseño ============= */}
        <div className="mb-10">
            <div className="lg:flex lg:justify-between">
                <article className="w-full lg:flex lg:flex-col lg:justify-center lg:items-center ">
                    <div className="w-full mb-5 lg:w-2/4">
                        <h4 className="text-4xl text-center py-5 uppercase lg:text-center">{ t('valiant.designDecisions') }</h4>
                    </div>

                    <div className="w-full appear-animation">
                        <img className="w-full" src={image2} alt={ t('valiant.designDecisions') } />
                    </div>
                </article>
            </div>
            <hr className="mt-10" />
        </div>

        {/* ============= Design System ============= */}
        <div className="mb-10">
            <div className="lg:flex lg:justify-between">
                <article className="w-full lg:flex lg:flex-col lg:justify-center lg:items-center ">
                    <div className="w-full mb-5 lg:w-2/4">
                        <h4 className="text-4xl text-center py-5 uppercase lg:text-center">{ t('valiant.designSystem') }</h4>
                    </div>

                    <div className="w-full appear-animation">
                        <img className="w-full" src={image3} alt={ t('valiant.designSystem') } />
                    </div>
                </article>
            </div>
            <hr className="mt-10" />
        </div>

        {/* ============= Valiant 2.0 ============= */}
        <div className="mb-10">
            <div className="lg:flex lg:justify-between">
                <article className="w-full lg:flex lg:flex-col lg:justify-center lg:items-center ">
                    <div className="w-full mb-5 lg:w-2/4">
                        <h4 className="text-4xl text-center py-5 uppercase lg:text-center">{ t('valiant.valiant2') }</h4>
                    </div>

                    <div className="w-full appear-animation">
                        <img className="w-full" src={image4} alt={ t('valiant.valiant2') } />
                    </div>
                </article>
            </div>
            <hr className="mt-10" />
        </div>

        {/* ============= Valiant 2.0 (Confirmación) ============= */}
        <div className="mb-10">
            <div className="lg:flex lg:justify-between">
                <article className="w-full lg:flex lg:flex-col lg:justify-center lg:items-center ">
                    <div className="w-full mb-5 lg:w-2/4">
                        <h4 className="text-4xl text-center py-5 uppercase lg:text-center">{ t('valiant.valiant2Confirmation') }</h4>
                    </div>

                    <div className="w-full appear-animation">
                        <img className="w-full" src={image5} alt={ t('valiant.valiant2Confirmation') } />
                    </div>
                </article>
            </div>
            <hr className="mt-10" />
        </div>

        {/* ============= Valiant 2.0 (Resultado) ============= */}
        <div className="mb-10">
            <div className="lg:flex lg:justify-between">
                <article className="w-full lg:flex lg:flex-col lg:justify-center lg:items-center ">
                    <div className="w-full mb-5 lg:w-2/4">
                        <h4 className="text-4xl text-center py-5 uppercase lg:text-center">{ t('valiant.valiant2Result') }</h4>
                    </div>

                    <div className="w-full appear-animation">
                        <img className="w-full" src={image6} alt={ t('valiant.valiant2Result') } />
                    </div>
                </article>
            </div>
        </div>

      </div>

    </div>
  )
}
