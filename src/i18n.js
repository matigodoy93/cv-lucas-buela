import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';


i18n.use(initReactI18next).init({
        debug: true,
        fallbackLng: "es",
        resources: {
            es: {
                translation: {
                    aboutMe: 'Sobre Mí',
                    education: 'Educación',
                    projects: 'Proyectos',
                    project: 'Proyecto',
                    curriculum: 'Currículum',
                    aboutMeDescrition: 'Hola, mi nombre es Lucas Gustavo Buela. Tengo 30 años y me desempeño de forma freelancer como diseñador UX/UI, diseñador gráfico, Full Stack developer y Tester QA/Automation. Comence mi carrera a la edad de 26 años y aunque todavia no he podido integrarme de manera dependiente dentro de un equipo de desarrollo, cada uno de mis trabajos refleja y representa mi ilusion de formar parte de uno.',
                    educationDavinciTitle: 'Escuela de Arte Multimedial "Da Vinci"',
                    educationDavinciDescription: 'Analista de sistemas/Diseñador UX/UI | 2021 - En curso',
                    educationEducacionItDescription: 'Tester QA Manual/Automation Selenium | 2023 (Finalizado)',
                    cinemaOnline: 'Cine Online',
                    thanks: '¡Gracias por pasar por aquí! Aquí hay más de mí si estás interesado',
                }
            },
            en: {
                translation: {
                    aboutMe: 'About Me',
                    education: 'Education',
                    projects: 'Projects',
                    project: 'Project',
                    curriculum: 'Resume',
                    aboutMeDescrition: 'Hello, my name is Lucas Gustavo Buela. I am 30 years old and I work as a freelancer as a UX/UI designer, graphic designer, Full Stack developer and QA/Automation Tester. I started my career at the age of 26 and although I have not yet been able to integrate dependently into a development team, each of my jobs reflects and represents my hope of being part of one.',
                    educationDavinciTitle: '"Da Vinci" Multimedia Art School',
                    educationDavinciDescription: 'Systems Analyst/UX/UI Designer | 2021 - In progress',
                    cinemaOnline: 'Online Cinema',
                    thanks: 'Thanks for stopping by! Here is more from me if you are interested',
                }
            },
        }
    })

    export default i18n;