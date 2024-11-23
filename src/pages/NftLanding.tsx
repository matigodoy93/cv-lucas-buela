import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import image0 from "../assets/images/project-nft-landing/0.jpg";
import image1 from "../assets/images/project-nft-landing/1.jpg";
import image2 from "../assets/images/project-nft-landing/2.jpg";
import image3 from "../assets/images/project-nft-landing/3.jpg";
import image4 from "../assets/images/project-nft-landing/4.jpg";
import image5 from "../assets/images/project-nft-landing/5.jpg";
import { ProjectHeader } from "../components/ProjectHeader/ProjectHeader";
import { Spinner } from "../components/Spinner/Spinner";
import './animations.css';
import ImageGrid from "../components/ImageGrid/ImageGrid";
import { ProjectInfo } from "../components/ProjectInfo/ProjectInfo";

export const NftLanding = () => {

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

                <ImageGrid
                    images={[{ src:image0, alt:'Imagen 1' }]} 
                    columnsMobile={1}
                    columnsTablet={1}
                    columnsDesktop={1}
                />

                <hr className="mt-10" />

                <ImageGrid
                    images={[{ src:image1, alt:'Imagen 2' }]} 
                    columnsMobile={1}
                    columnsTablet={1}
                    columnsDesktop={1}
                />

                <hr className="mt-10" />

                <ImageGrid
                    images={[{ src:image2, alt:'Imagen 3' }]} 
                    columnsMobile={1}
                    columnsTablet={1}
                    columnsDesktop={1}
                />

                <hr className="mt-10" />

                <ImageGrid
                    images={[{ src:image3, alt:'Imagen 4' }]} 
                    columnsMobile={1}
                    columnsTablet={1}
                    columnsDesktop={1}
                />

                <hr className="mt-10" />

                <ImageGrid
                    images={[{ src:image4, alt:'Imagen 5' }]} 
                    columnsMobile={1}
                    columnsTablet={1}
                    columnsDesktop={1}
                />

                <hr className="mt-10" />

                <ImageGrid
                    images={[{ src:image5, alt:'Imagen 6' }]} 
                    columnsMobile={1}
                    columnsTablet={1}
                    columnsDesktop={1}
                />

                <hr className="mt-10" />



            </div>
        </div>
    );
}
