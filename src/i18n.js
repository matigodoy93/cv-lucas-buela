import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';


i18n.use(initReactI18next).init({
        debug: true,
        lng: localStorage.getItem('appLanguage') || 'es', // Carga el idioma desde localStorage
        fallbackLng: 'es',
        interpolation: {
          escapeValue: false // React ya hace el escape
        },
        resources: {
            es: {
                translation: {
                    aboutMe: 'Sobre Mí',
                    education: 'Educación',
                    projects: 'Proyectos',
                    project: 'Proyecto',
                    curriculum: 'Currículum',
                    aboutMeDescrition: 'Hola, mi nombre es Lucas Gustavo Buela. Tengo 30 años y me desempeño de forma freelancer como diseñador UX/UI, diseñador gráfico, Full Stack developer y Tester QA/Automation. \nComencé mi carrera a la edad de 26 años y aunque todavia no he podido integrarme de manera dependiente dentro de un equipo de desarrollo, cada uno de mis trabajos refleja y representa mi ilusión de formar parte de uno.',
                    educationDavinciTitle: 'Escuela de Arte Multimedial "Da Vinci"',
                    educationDavinciDescription: 'Analista de sistemas/Diseñador UX/UI | 2021 - En curso',
                    educacionItDescription: 'Tester QA Manual/Automation Selenium | 2023 (Finalizado)',
                    cinemaOnline: {
                        title:'Cine Online',
                        homePageText: 'Aquí nos encontramos con el diseño de la Home Page, donde vemos el logo y un carrousel de tres banners diseñados previamente en Photoshop. Luego dos listas desplazables, en la primera para seleccionar un complejo del cine y la segunda para el tipo de sala. \nA continuación podemos ver tres secciones, en la primera las películas medianamente nuevas. En la segunda sección se encuentran las estreno y en la tercera las que están próximamente a estrenarse. \nPara finalizar tenemos un footer donde vemos algunas direcciones de los complejos y seguido las RRSS.',
                        contactFormTitle: 'Formulario de Contacto',
                        contactFormText: 'En el apartado de “Formulario de contacto” nos encontramos con un formulario donde con solo tres datos (Nombre,Apellido y Mail), el usuario se puede comunicar con nosotros. \nEsta sección cuenta también con Google Maps donde podemos encontrar el punto exacto de cada complejo de CineOnline.',
                        loginFormTitle: 'Formulario de Log In',
                        loginFormText: 'La sección de LOG IN (INICIO DE SESION), cuenta con un formulario para ingresar datos del usuario, donde posteriormente se es analizado en una base de datos para verificar si coincide con un perfil previamente inscripto, de no ser asi , cuenta con la opción de crear un usuario nuevo o de recuperar su contraseña en caso de olvidarla.',
                        classicsSectionTitle: 'Seccion de Clásicos',
                        classicsSectionText: 'El apartado de CLASICOS , es donde podremos encontrar y revivir esas películas que nos fascinaron a lo largo del tiempo. \nPodemos filtrarlas mediante los diferentes géneros cinematográficos. \n\n- Acción \n- Aventura \n- Catástrofe \n- Ciencia Ficción \n- Comedia \n- Documentales \n- Drama \n- Fantasía',
                        alt: {
                            desktopDevice: 'Dispositivo de escritorio',
                            tabletpDevice: 'Dispositivo de tableta',
                        }
                    },
                    valiant: {
                        title: 'Valiant',
                        valiant1: 'VALIANT 1.0',
                        valiant1Text: 'VALIANT es un proyecto de diseño de Interfaz Web , nuestro trabajo consiste en encontrar las fallas de una antigua version y diseñar una nueva utilizando FIGMA. \n\nLa historia es la siguiente: \n\nLa "Valiant", una vez el orgullo de la flota estelar, ahora es un monumento a la tragedia en el espacio. Su destrucción fue un golpe devastador, pero entre los restos se descubrió una dolorosa verdad: la interfaz de control de la torre de defensa, compleja e ineficiente, contribuyó a su caída. El operador, abrumado por la información y la falta de herramientas intuitivas, no pudo reaccionar a tiempo. La "Hope" se perdió, y con ella, la "Valiant".',
                        designDecisions: 'Decisiones de Diseño',
                        designSystem: 'Sistema de Diseño',
                        valiant2: 'Valiant 2.0',
                        valiant2Confirmation: 'Valiant 2.0 (Confirmación)',
                        valiant2Result: 'Valiant 2.0 (Resultado)',
                    },
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
                    aboutMeDescrition: 'Hello, my name is Lucas Gustavo Buela. I am 30 years old and I work as a freelancer as a UX/UI designer, graphic designer, Full Stack developer and QA/Automation Tester. \nI started my career at the age of 26 and although I have not yet been able to integrate dependently into a development team, each of my jobs reflects and represents my hope of being part of one.',
                    educationDavinciTitle: '"Da Vinci" Multimedia Art School',
                    educationDavinciDescription: 'Systems Analyst/UX/UI Designer | 2021 - In progress',
                    educacionItDescription: 'QA Tester Manual/Automation Selenium | 2023 (Completed)',
                    cinemaOnline: {
                        title: 'Online Cinema',
                        homePageText: 'Here we have the design of the Home Page, where we see the logo and a carousel of three banners previously designed in Photoshop. Then, there are two drop-down lists: the first to select a cinema complex and the second for the type of theater. \nNext, we can see three sections: the first shows moderately new movies, the second features new releases, and the third displays upcoming releases. \nFinally, we have a footer that shows some addresses of the complexes, followed by social media links.',
                        contactFormTitle: 'Contact Form',
                        contactFormText: 'In the “Contact Form” section, there is a form where, with just three fields (First Name, Last Name, and Email), users can reach out to us. \nThis section also includes Google Maps, where users can find the exact location of each CineOnline complex.',
                        loginFormTitle: 'Log In Form',
                        loginFormText: 'The LOG IN section includes a form for users to enter their details, which are then checked against a database to verify if they match a previously registered profile. If not, users have the option to create a new account or recover their password if they have forgotten it.',
                        classicsSectionTitle: 'Classics Section',
                        classicsSectionText: 'The CLASSICS section is where we can find and relive those movies that have fascinated us over time. They can be filtered by various film genres: \n\n-Action, \n-Adventure, \n-Disaster, \n-Science \n-Fiction, \n-Comedy, \n-Documentaries, \n-Drama, \n-Fantasy.',
                        alt: {
                            desktopDevice: 'Desktop Device',
                            tabletpDevice: 'Tablet Device',
                        }
                    },
                    valiant: {
                        title: 'Valiant',
                        valiant1: 'VALIANT 1.0',
                        valiant1Text: 'VALIANT is a Web Interface Design project, where our task is to identify flaws in an older version and design a new one using FIGMA. \n\nThe story goes as follows: \n\nThe "Valiant," once the pride of the star fleet, now stands as a monument to tragedy in space. Its destruction was a devastating blow, but amidst the wreckage, a painful truth emerged: the defense tower control interface, complex and inefficient, contributed to its downfall. The operator, overwhelmed by information and lacking intuitive tools, couldn’t react in time. "Hope" was lost, and with it, the "Valiant."',
                        designDecisions: 'Design Decisions',
                        designSystem: 'Design System',
                        valiant2: 'Valiant 2.0',
                        valiant2Confirmation: 'Valiant 2.0 (Confirmation)',
                        valiant2Result: 'Valiant 2.0 (Result)',

                    },
                    thanks: 'Thanks for stopping by! Here is more from me if you are interested',
                }
            },
        }
    })

    export default i18n;