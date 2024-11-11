import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import image1 from "../assets/images/project-cineonline/1.jpg";
import image10 from "../assets/images/project-cineonline/10.jpg";
import image11 from "../assets/images/project-cineonline/11.png";
import image12 from "../assets/images/project-cineonline/12.png";
import image2 from "../assets/images/project-cineonline/2.jpg";
import image3 from "../assets/images/project-cineonline/3.jpg";
import image4 from "../assets/images/project-cineonline/4.jpg";
import image5 from "../assets/images/project-cineonline/5.jpg";
import image6 from "../assets/images/project-cineonline/6.jpg";
import image7 from "../assets/images/project-cineonline/7.jpg";
import image8 from "../assets/images/project-cineonline/8.jpg";
import image9 from "../assets/images/project-cineonline/9.jpg";
import { ProjectHeader } from "../components/ProjectHeader/ProjectHeader";
import { ProjectInfo } from "../components/ProjectInfo/ProjectInfo";
import { Spinner } from "../components/Spinner/Spinner";
import './animations.css';
import ImageGrid from "../components/ImageGrid/ImageGrid";

export const CineOnline = () => {

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
            <ProjectHeader title={ t('cinemaOnline.title') } />
            
            <div className="px-10 md:px-20 lg:px-40">
                <h2 className="font-bold text-center mb-8 text-5xl uppercase md:text-7xl lg:text-start lg:text-7xl lg:hidden">
                    { t('cinemaOnline.title') }
                </h2>

                <ProjectInfo
                    isImageFirst={true}
                    image={image1}
                    subtitle="Home Page"
                    text={ t('cinemaOnline.homePageText') }
                />

                <ProjectInfo
                    isImageFirst={true}
                    image={image2}
                    subtitle={ t('cinemaOnline.contactFormTitle') }
                    text={ t('cinemaOnline.contactFormText') }
                />

                <ProjectInfo
                    isImageFirst={false}
                    image={image3}
                    subtitle={ t('cinemaOnline.loginFormTitle') }
                    text={ t('cinemaOnline.loginFormText') }
                />

                <ProjectInfo
                    isImageFirst={false}
                    image={image4}
                    subtitle={ t('cinemaOnline.classicsSectionTitle') }
                    text={ t('cinemaOnline.classicsSectionText') }
                />

                {/* ============= BANNERS ============= */}
                <ImageGrid title="Banners" images={[{title: 'Banner 1', src:image5, alt:'Banner 1'}, {title: 'Banner 2', src:image6, alt:'Banner 2'}]} columnsMobile={1} columnsTablet={1} columnsDesktop={2} />

                <hr className="mt-10" />

                {/* ============= WIREFRAMES ============= */}
                <ImageGrid title="Wireframes" images={[{title: 'Wireframe 1', src:image7, alt:'Wireframe 1'}, {title: 'Wireframe 2', src:image8, alt:'Wireframe 2'}]} columnsMobile={1} columnsTablet={1} columnsDesktop={2} />
                

                <ImageGrid  images={[{src:image9, alt:'Wireframe 3'}, {src:image10, alt:'Wireframe 4'}]} columnsMobile={1} columnsTablet={1} columnsDesktop={2} />

                <hr className="mt-10" />

                {/* ============= DISPOSITIVOS ============= */}
                <ImageGrid title="Mockups" images={[{src:image11, alt:'Wireframe 1'}, {src:image12, alt:'Wireframe 2'}]} columnsMobile={1} columnsTablet={1} columnsDesktop={2} />

            </div>
        </div>
    );
}
