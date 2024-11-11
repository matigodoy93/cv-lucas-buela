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
import './animations.css';
import ImageGrid from '../components/ImageGrid/ImageGrid';

export const Valiant = () => {

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
        subtitle={ 'valiant.valiant1' }
        text={ 'valiant.valiant1Text' }
        />

        {/* ============= Decisiones de Diseño ============= */}
        
        <ImageGrid title='valiant.designDecisions' images={[{src:image2, alt:'valiant.designDecisions'}]} columnsMobile={1} columnsTablet={1} columnsDesktop={1} />

        <hr className="mt-10" />


        {/* ============= Design System ============= */}
        <ImageGrid title='valiant.designSystem' images={[{src:image3, alt:'valiant.designSystem'}]} columnsMobile={1} columnsTablet={1} columnsDesktop={1} />

        <hr className="mt-10" />

        {/* ============= Valiant 2.0 ============= */}
        <ImageGrid title='valiant.valiant2' images={[{src:image4, alt:'valiant.valiant2'}]} columnsMobile={1} columnsTablet={1} columnsDesktop={1} />
        
        <hr className="mt-10" />

        {/* ============= Valiant 2.0 (Confirmación) ============= */}
        <ImageGrid title='valiant.valiant2Confirmation' images={[{src:image5, alt:'valiant.valiant2Confirmation'}]} columnsMobile={1} columnsTablet={1} columnsDesktop={1} />

        <hr className="mt-10" />

        {/* ============= Valiant 2.0 (Resultado) ============= */}
        <ImageGrid title='valiant.valiant2Result' images={[{src:image6, alt:'valiant.valiant2Result'}]} columnsMobile={1} columnsTablet={1} columnsDesktop={1} />

      </div>

    </div>
  )
}
