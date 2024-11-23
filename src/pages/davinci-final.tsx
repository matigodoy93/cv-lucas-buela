import { useEffect, useState } from 'react';
import image0 from "../assets/images/project-ux-research-davinci/0.png";
import image1 from "../assets/images/project-ux-research-davinci/1.png";
import image2 from "../assets/images/project-ux-research-davinci/2.png";
import image3 from "../assets/images/project-ux-research-davinci/3.png";
import image4 from "../assets/images/project-ux-research-davinci/4.png";
import image5 from "../assets/images/project-ux-research-davinci/5.png";
import image6 from "../assets/images/project-ux-research-davinci/6.png";
import image7 from "../assets/images/project-ux-research-davinci/7.png";
import image8 from "../assets/images/project-ux-research-davinci/8.png";
import image9 from "../assets/images/project-ux-research-davinci/9.png";
import image10 from "../assets/images/project-ux-research-davinci/10.png";
import image11 from "../assets/images/project-ux-research-davinci/11.png";
import image12 from "../assets/images/project-ux-research-davinci/12.png";
import image13 from "../assets/images/project-ux-research-davinci/13.png";
import image14 from "../assets/images/project-ux-research-davinci/14.png";
import image15 from "../assets/images/project-ux-research-davinci/15.png";
import image16 from "../assets/images/project-ux-research-davinci/16.png";
import image17 from "../assets/images/project-ux-research-davinci/17.png";
import image18 from "../assets/images/project-ux-research-davinci/18.png";
import image19 from "../assets/images/project-ux-research-davinci/19.png";
import image20 from "../assets/images/project-ux-research-davinci/20.png";
import image21 from "../assets/images/project-ux-research-davinci/21.png";
import image22 from "../assets/images/project-ux-research-davinci/22.png";
import image23 from "../assets/images/project-ux-research-davinci/23.png";
import image24 from "../assets/images/project-ux-research-davinci/24.png";
import image25 from "../assets/images/project-ux-research-davinci/25.png";
import image26 from "../assets/images/project-ux-research-davinci/26.png";
import image27 from "../assets/images/project-ux-research-davinci/27.png";
import image28 from "../assets/images/project-ux-research-davinci/28.png";
import image29 from "../assets/images/project-ux-research-davinci/29.png";
import image30 from "../assets/images/project-ux-research-davinci/30.png";
import image31 from "../assets/images/project-ux-research-davinci/31.png";
import image32 from "../assets/images/project-ux-research-davinci/32.png";
import ImageGrid from '../components/ImageGrid/ImageGrid';
import { ProjectHeader } from '../components/ProjectHeader/ProjectHeader';
import { Spinner } from '../components/Spinner/Spinner';
import './animations.css';
import CursorBackground from '../components/CursorBackground/CursorBackground';

export const DavinciFinal = () => {

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
      <>
        <CursorBackground />
        <div className="mt-10 md:mt-24">
          <ProjectHeader title="Final UX Research - Da Vinci" />
    
          <div className="px-10 md:px-20 lg:px-40">
            <h2 className='font-bold text-center mb-8 text-5xl uppercase md:text-7xl lg:text-start lg:text-7xl lg:hidden'>Final UX Research - Da Vinci</h2>
    
            {/* <ProjectInfo
            isImageFirst={true}
            image={image1}
            subtitle={ t('davinci.davinci1') }
            text={ t('davinci.davinci1Text') }
            /> */}
    
            
            {/* =============  ============= */}
            <ImageGrid images={[{src:image0, alt:''}]} columnsMobile={1} columnsTablet={1} columnsDesktop={1} />
            <hr className="my-10" />

            {/* =============  ============= */}
            <ImageGrid images={[{src:image1, alt:''}]} columnsMobile={1} columnsTablet={1} columnsDesktop={1} />
            <hr className="my-10" />

            {/* =============  ============= */}
            <ImageGrid images={[{src:image2, alt:''}]} columnsMobile={1} columnsTablet={1} columnsDesktop={1} />
            <hr className="my-10" />

            {/* =============  ============= */}
            <ImageGrid images={[{src:image3, alt:''}]} columnsMobile={1} columnsTablet={1} columnsDesktop={1} />
            <hr className="my-10" />

            {/* =============  ============= */}
            <ImageGrid images={[{src:image4, alt:''}]} columnsMobile={1} columnsTablet={1} columnsDesktop={1} />
            <hr className="my-10" />

            {/* =============  ============= */}
            <ImageGrid images={[{src:image5, alt:''}]} columnsMobile={1} columnsTablet={1} columnsDesktop={1} />
            <hr className="my-10" />

            {/* =============  ============= */}
            <ImageGrid images={[{src:image6, alt:''}]} columnsMobile={1} columnsTablet={1} columnsDesktop={1} />
            <hr className="my-10" />

            {/* =============  ============= */}
            <ImageGrid images={[{src:image7, alt:''}]} columnsMobile={1} columnsTablet={1} columnsDesktop={1} />
            <hr className="my-10" />

            {/* =============  ============= */}
            <ImageGrid images={[{src:image8, alt:''}]} columnsMobile={1} columnsTablet={1} columnsDesktop={1} />
            <hr className="my-10" />

            {/* =============  ============= */}
            <ImageGrid images={[{src:image9, alt:''}]} columnsMobile={1} columnsTablet={1} columnsDesktop={1} />
            <hr className="my-10" />

            {/* =============  ============= */}
            <ImageGrid images={[{src:image10, alt:''}]} columnsMobile={1} columnsTablet={1} columnsDesktop={1} />
            <hr className="my-10" />

    
            {/* =============  ============= */}
            <ImageGrid images={[{src:image11, alt:''}]} columnsMobile={1} columnsTablet={1} columnsDesktop={1} />
            <hr className="my-10" />

            {/* =============  ============= */}
            <ImageGrid images={[{src:image12, alt:''}]} columnsMobile={1} columnsTablet={1} columnsDesktop={1} />
            <hr className="my-10" />

            {/* =============  ============= */}
            <ImageGrid images={[{src:image13, alt:''}]} columnsMobile={1} columnsTablet={1} columnsDesktop={1} />
            <hr className="my-10" />

            {/* =============  ============= */}
            <ImageGrid images={[{src:image14, alt:''}]} columnsMobile={1} columnsTablet={1} columnsDesktop={1} />
            <hr className="my-10" />

            {/* =============  ============= */}
            <ImageGrid images={[{src:image15, alt:''}]} columnsMobile={1} columnsTablet={1} columnsDesktop={1} />
            <hr className="my-10" />

            {/* =============  ============= */}
            <ImageGrid images={[{src:image16, alt:''}]} columnsMobile={1} columnsTablet={1} columnsDesktop={1} />
            <hr className="my-10" />

            {/* =============  ============= */}
            <ImageGrid images={[{src:image17, alt:''}]} columnsMobile={1} columnsTablet={1} columnsDesktop={1} />
            <hr className="my-10" />

            {/* =============  ============= */}
            <ImageGrid images={[{src:image18, alt:''}]} columnsMobile={1} columnsTablet={1} columnsDesktop={1} />
            <hr className="my-10" />

            {/* =============  ============= */}
            <ImageGrid images={[{src:image19, alt:''}]} columnsMobile={1} columnsTablet={1} columnsDesktop={1} />
            <hr className="my-10" />

            {/* =============  ============= */}
            <ImageGrid images={[{src:image20, alt:''}]} columnsMobile={1} columnsTablet={1} columnsDesktop={1} />
            <hr className="my-10" />

            {/* =============  ============= */}
            <ImageGrid images={[{src:image21, alt:''}]} columnsMobile={1} columnsTablet={1} columnsDesktop={1} />
            <hr className="my-10" />

            {/* =============  ============= */}
            <ImageGrid images={[{src:image22, alt:''}]} columnsMobile={1} columnsTablet={1} columnsDesktop={1} />
            <hr className="my-10" />

            {/* =============  ============= */}
            <ImageGrid images={[{src:image23, alt:''}]} columnsMobile={1} columnsTablet={1} columnsDesktop={1} />
            <hr className="my-10" />

            {/* =============  ============= */}
            <ImageGrid images={[{src:image24, alt:''}]} columnsMobile={1} columnsTablet={1} columnsDesktop={1} />
            <hr className="my-10" />

            {/* =============  ============= */}
            <ImageGrid images={[{src:image25, alt:''}]} columnsMobile={1} columnsTablet={1} columnsDesktop={1} />
            <hr className="my-10" />

            {/* =============  ============= */}
            <ImageGrid images={[{src:image26, alt:''}]} columnsMobile={1} columnsTablet={1} columnsDesktop={1} />
            <hr className="my-10" />

            {/* =============  ============= */}
            <ImageGrid images={[{src:image27, alt:''}]} columnsMobile={1} columnsTablet={1} columnsDesktop={1} />
            <hr className="my-10" />

            {/* =============  ============= */}
            <ImageGrid images={[{src:image28, alt:''}]} columnsMobile={1} columnsTablet={1} columnsDesktop={1} />
            <hr className="my-10" />

            {/* =============  ============= */}
            <ImageGrid images={[{src:image29, alt:''}]} columnsMobile={1} columnsTablet={1} columnsDesktop={1} />
            <hr className="my-10" />

            {/* =============  ============= */}
            <ImageGrid images={[{src:image30, alt:''}]} columnsMobile={1} columnsTablet={1} columnsDesktop={1} />
            <hr className="my-10" />

            {/* =============  ============= */}
            <ImageGrid images={[{src:image31, alt:''}]} columnsMobile={1} columnsTablet={1} columnsDesktop={1} />
            <hr className="my-10" />

            {/* =============  ============= */}
            <ImageGrid images={[{src:image32, alt:''}]} columnsMobile={1} columnsTablet={1} columnsDesktop={1} />

    
    
          </div>
    
        </div>
      </>
    )
}
