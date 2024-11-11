import { useEffect, useState } from 'react';
import image0 from "../assets/images/project-farmaconecta/0.png";
import image1 from "../assets/images/project-farmaconecta/1.png";
import image10 from "../assets/images/project-farmaconecta/10.png";
import image2 from "../assets/images/project-farmaconecta/2.png";
import image3 from "../assets/images/project-farmaconecta/3.png";
import image4 from "../assets/images/project-farmaconecta/4.png";
import image5 from "../assets/images/project-farmaconecta/5.png";
import image6 from "../assets/images/project-farmaconecta/6.png";
import image7 from "../assets/images/project-farmaconecta/7.png";
import image8 from "../assets/images/project-farmaconecta/8.png";
import image9 from "../assets/images/project-farmaconecta/9.png";
import ImageGrid from '../components/ImageGrid/ImageGrid';
import { ProjectHeader } from '../components/ProjectHeader/ProjectHeader';
import { Spinner } from '../components/Spinner/Spinner';
import './animations.css';

export const FarmaConecta = () => {

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
        <ProjectHeader title="FARMACONECTA" />
  
        <div className="px-10 md:px-20 lg:px-40">
          <h2 className='font-bold text-center mb-8 text-5xl uppercase md:text-7xl lg:text-start lg:text-7xl lg:hidden'>FARMACONECTA</h2>
  
          {/* <ProjectInfo
            isImageFirst={true}
            image={image1}
            subtitle={ t('farmaconecta.farmaconecta1') }
            text={ t('farmaconecta.farmaconecta1Text') }
          /> */}

          {/* =============  ============= */}
          <ImageGrid images={[{src:image0, alt:''}]} columnsMobile={1} columnsTablet={1} columnsDesktop={1} />
          <hr className="mt-10" />

          {/* =============  ============= */}
          <ImageGrid images={[{src:image1, alt:''}]} columnsMobile={1} columnsTablet={1} columnsDesktop={1} />
          <hr className="mt-10" />

          {/* =============  ============= */}
          <ImageGrid images={[{src:image2, alt:''}]} columnsMobile={1} columnsTablet={1} columnsDesktop={1} />
          <hr className="mt-10" />

          {/* =============  ============= */}
          <ImageGrid images={[{src:image3, alt:''}]} columnsMobile={1} columnsTablet={1} columnsDesktop={1} />
          <hr className="mt-10" />

          {/* =============  ============= */}
          <ImageGrid images={[{src:image4, alt:''}]} columnsMobile={1} columnsTablet={1} columnsDesktop={1} />
          <hr className="mt-10" />

          {/* =============  ============= */}
          <ImageGrid images={[{src:image5, alt:''}]} columnsMobile={1} columnsTablet={1} columnsDesktop={1} />
          <hr className="mt-10" />

          {/* =============  ============= */}
          <ImageGrid images={[{src:image6, alt:''}]} columnsMobile={1} columnsTablet={1} columnsDesktop={1} />
          <hr className="mt-10" />

          {/* =============  ============= */}
          <ImageGrid images={[{src:image7, alt:''}]} columnsMobile={1} columnsTablet={1} columnsDesktop={1} />
          <hr className="mt-10" />

          {/* =============  ============= */}
          <ImageGrid images={[{src:image8, alt:''}]} columnsMobile={1} columnsTablet={1} columnsDesktop={1} />
          <hr className="mt-10" />

          {/* =============  ============= */}
          <ImageGrid images={[{src:image9, alt:''}]} columnsMobile={1} columnsTablet={1} columnsDesktop={1} />
          <hr className="mt-10" />

          {/* =============  ============= */}
          <ImageGrid images={[{src:image10, alt:''}]} columnsMobile={1} columnsTablet={1} columnsDesktop={1} />
          <hr className="mt-10" />

  
        </div>
  
      </div>
    )
}
