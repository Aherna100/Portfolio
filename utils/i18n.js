import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        lng: 'en',
        debug: true,
        fallbackLng: 'en',
        resources: {
            en: {
                translation: {
                    // here we will place our translations...
                    main: {
                        part1: 'Hello, my name is',
                        part2: `I'm a full stack developer.`,
                        part3: `Software development technician with a techical degree in fullstack engineering, currently i'm focusing on improve my skills as a deveoper in react and swift.`,
                    },
                    about: {
                        part1: `My interest in web development started in 2012, creating flash animations, turns out i really like it, So i decided to start a career as software developer, my main focus is to learn and i'm looking forward to gain experience in personal projects or in a well known company.`,
                        part2: `Here you will find a list of languages that i've been working with:`,
                        part3: 'About Me'
                    },
                    projects: {
                        part1: `Some Things I've Built`
                    },
                    contact: {
                        part1: 'Get in Touch',
                        part2: `Currently i'm looking for new opportunities, you can send me an email, I'll reply at my earliest convenient.`,

                    },
                    carousel: {
                        part1: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
                        part2: 'perspiciatis unde omnis iste natus',
                    }
                }
            },
            es: {
                translation: {
                    main: {
                        part1: 'Hola, mi nombre es',
                        part2: 'Soy un desarrollador full stack',
                        part3: 'Tecnologo en desarrollo de software con un grado tecnico en desarrollo full stack, actualmente me estoy enfocando en mejorar mis habilidades como desarrollador en react y swift.',
                    },
                    about: {
                        part1: `Mi interez en desarrollo web inicio en 2012, creando animaciones flash, resultando que me gusta bastante, asi que decidi iniciar la carrera de desaroollo de software, mi principal objetivo es aprender, ademas de buscar oportunidades para ganar experiencia ya sea con proyectos personales o en una compañia ya establecida.`,
                        part2: `Acontinuacion encontraras una lista de lenguajes con los cuales he estado trabajando:`,
                        part3: 'Acerca de Mi'
                    },
                    projects: {
                        part1: `Algunas Cosas Que He Construido`
                    },
                    contact: {
                        part1: 'Ponte en contacto',
                        part2: `Actualmente estoy buscando nuevas oportunidades, me puedes enviar un email, lo respondere tan pronto como sea posible.`,
                    }
                }
            }
        }
    });

export default i18n;