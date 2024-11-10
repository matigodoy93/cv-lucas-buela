import { useTranslation } from 'react-i18next';
import image1 from "../assets/images/project-valiant/1.png";
import image2 from "../assets/images/project-valiant/2.png";
import image4 from "../assets/images/project-valiant/4.jpg";
import image5 from "../assets/images/project-valiant/5.jpg";
import image6 from "../assets/images/project-valiant/6.jpg";
import { ProjectHeader } from '../components/ProjectHeader/ProjectHeader';
import { ProjectInfo } from '../components/ProjectInfo/ProjectInfo';
import { useEffect, useState } from 'react';
import { Spinner } from '../components/Spinner/Spinner';
import './animations.css';

export const DavinciFinal = () => {

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
        <ProjectHeader title="Final UX Research - Da Vinci" />
  
        <div className="px-10 md:px-20 lg:px-40">
          <h2 className='font-bold text-center mb-8 text-5xl uppercase md:text-7xl lg:text-start lg:text-7xl lg:hidden'>Final UX Research - Da Vinci</h2>
  
          <ProjectInfo
          isImageFirst={true}
          image={image1}
          subtitle={ t('davinci.davinci1') }
          text={ t('davinci.davinci1Text') }
          />
  
          {/* ============= Decisiones de Diseño ============= */}
          <div className="mb-10">
              <div className="lg:flex lg:justify-between">
                  <article className="w-full lg:flex lg:flex-col lg:justify-center lg:items-center ">
                      <div className="w-full mb-5 lg:w-2/4">
                          <h4 className="text-4xl text-center py-5 uppercase lg:text-center">{ t('davinci.designDecisions') }</h4>
                      </div>
  
                      <div className="w-full appear-animation">
                          <img className="w-full" src={image2} alt={ t('davinci.designDecisions') } />
                      </div>
                  </article>
              </div>
              <hr className="mt-10" />
          </div>
  
        </div>
  
      </div>
    )
}
