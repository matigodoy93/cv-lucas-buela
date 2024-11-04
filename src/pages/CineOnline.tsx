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

export const CineOnline = () => {

    const { t } = useTranslation();

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
                <div className="mb-10">
                    <div className="lg:flex lg:justify-between">
                        <article className="w-full lg:flex lg:flex-col lg:justify-center lg:items-center ">
                            <div className="w-full mb-5 lg:w-2/4">
                                <h4 className="text-4xl text-center py-5 uppercase lg:text-center">Banner 1</h4>
                            </div>

                            <div className="appear-animation w-full lg:w-4/5 mx-auto">
                                <img className="w-full" src={image5} alt={'Banner 1'} />
                            </div>
                        </article>
                        <article className="w-full mt-10 lg:mt-0 lg:flex lg:flex-col lg:justify-center lg:items-center">
                            <div className="w-full mb-5 lg:w-2/4">
                                <h4 className="text-4xl text-center py-5 uppercase lg:text-center">Banner 2</h4>
                            </div>

                            <div className="appear-animation w-full lg:w-4/5 mx-auto">
                                <img className="w-full" src={image6} alt={'Banner 2'} />
                            </div>
                        </article>
                    </div>
                    <hr className="mt-10" />
                </div>

                {/* ============= WIREFRAMES ============= */}
                <div className="mb-10">
                    <div className="w-full mb-10">
                        <h4 className="text-4xl text-center uppercase py-5 lg:text-center">WireFrames</h4>
                    </div>
                    <div className="lg:flex lg:justify-between">
                        <article className="w-full lg:flex lg:flex-col lg:justify-center lg:items-center ">
                            <div className="appear-animation w-full lg:w-4/5 mx-auto">
                                <img className="w-full" src={image7} alt={'Wireframe 1'} />
                            </div>
                        </article>
                        <article className="w-full mt-10 lg:mt-0 lg:flex lg:flex-col lg:justify-center lg:items-center">
                            <div className="appear-animation w-full lg:w-4/5 mx-auto">
                                <img className="w-full" src={image8} alt={'Wireframe 2'} />
                            </div>
                        </article>
                    </div>
                </div>

                <div className="mb-10">
                    <div className="lg:flex lg:justify-between">
                        <article className="w-full lg:flex lg:flex-col lg:justify-center lg:items-center ">
                            <div className="appear-animation w-full lg:w-4/5 mx-auto">
                                <img className="w-full" src={image9} alt={'Wireframe 3'} />
                            </div>
                        </article>
                        <article className="w-full mt-10 lg:mt-0 lg:flex lg:flex-col lg:justify-center lg:items-center">
                            <div className="appear-animation w-full lg:w-4/5 mx-auto">
                                <img className="w-full" src={image10} alt={'Wireframe 4'} />
                            </div>
                        </article>
                    </div>
                    <hr className="mt-10" />
                </div>

                {/* ============= DISPOSITIVOS ============= */}
                <div className="mb-10">
                    <div className="w-full">
                        <h4 className="text-4xl uppercase text-center py-5 lg:text-center">Mockups</h4>
                    </div>
                    <div className="lg:flex lg:justify-between">
                        <article className="w-full lg:flex lg:flex-col lg:justify-center lg:items-center ">
                            <div className="w-full lg:w-full mx-auto">
                                <img className="w-full" src={image11} alt={ t('cinemaOnline.alt.desktopDevice') } />
                            </div>
                        </article>
                        <article className="w-full mt-10 lg:mt-0 lg:flex lg:flex-col lg:justify-center lg:items-center">
                            <div className="w-full lg:w-full mx-auto">
                                <img className="w-full" src={image12} alt={ t('cinemaOnline.alt.tabletDevice') } />
                            </div>
                        </article>
                    </div>
                </div>

            </div>
        </div>
    );
}
