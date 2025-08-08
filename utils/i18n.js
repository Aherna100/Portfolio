import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        lng: 'en',
        debug: process.env.NODE_ENV === 'development',
        fallbackLng: 'en',
        resources: {
            en: {
                translation: {
                    main: {
                        part1: 'Hello, my name is',
                        part2: `I'm a Full-Stack Engineer & Process Automation Specialist`,
                        part3: `Experienced software developer with expertise in .NET development and Microsoft Power Platform automation. Currently pursuing full-stack engineering while leading teams and managing multiple projects in enterprise environments.`,
                    },
                    about: {
                        part1: `My journey in software development began in 2012 with web animations, evolving into a passion for full-stack engineering. I specialize in .NET development and process automation using Microsoft Power Platform, with proven experience in team leadership and project management. I thrive on learning new technologies and delivering scalable solutions for complex business requirements.`,
                        part2: `Technologies and platforms I work with:`,
                        part3: 'About Me',
                        skills: {
                            backend: '.NET Framework & Core',
                            frontend: 'React & TypeScript',
                            automation: 'Power Platform Suite',
                            mobile: 'Swift & React Native',
                            database: 'SQL Server & Azure',
                            cloud: 'Azure',
                            leadership: 'Team Management',
                            methodology: 'Agile & Scrum'
                        }
                    },
                    projects: {
                        part1: `Featured Projects & Automation Solutions`,
                        part2: `Enterprise process automation and full-stack applications`
                    },
                    contact: {
                        part1: 'Let\'s Connect',
                        part2: `I'm open to discussing new opportunities in full-stack development, .NET projects, or process automation initiatives. Whether you're looking for technical leadership or hands-on development, let's talk about how I can contribute to your team.`,
                    },
                    experience: {
                        title: 'Professional Experience',
                        automation: 'Process Automation Specialist',
                        leadership: 'Team Leader & Project Manager',
                        development: 'Full-Stack Developer',
                        description: 'Leading cross-functional teams while delivering enterprise-grade automation solutions'
                    }
                }
            },
            es: {
                translation: {
                    main: {
                        part1: 'Hola, mi nombre es',
                        part2: `Soy Ingeniero Full-Stack y Especialista en Automatización de Procesos`,
                        part3: `Desarrollador de software experimentado en desarrollo .NET y automatización de procesos con Microsoft Power Platform. Actualmente cursando ingeniería full-stack mientras lidero equipos y gestiono múltiples proyectos en entornos empresariales.`,
                    },
                    about: {
                        part1: `Mi trayectoria en desarrollo de software comenzó en 2012 con animaciones web, evolucionando hacia una pasión por la ingeniería full-stack. Me especializo en desarrollo .NET y automatización de procesos usando Microsoft Power Platform, con experiencia comprobada en liderazgo de equipos y gestión de proyectos. Me motiva aprender nuevas tecnologías y entregar soluciones escalables para requerimientos empresariales complejos.`,
                        part2: `Tecnologías y plataformas con las que trabajo:`,
                        part3: 'Acerca de Mí',
                        skills: {
                            backend: '.NET Framework y Core',
                            frontend: 'React y TypeScript',
                            automation: 'Suite Power Platform',
                            mobile: 'Swift y React Native',
                            database: 'SQL Server y Azure',
                            cloud: 'Azure',
                            leadership: 'Gestión de Equipos',
                            methodology: 'Agile y Scrum'
                        }
                    },
                    projects: {
                        part1: `Proyectos Destacados y Soluciones de Automatización`,
                        part2: `Automatización de procesos empresariales y aplicaciones full-stack`
                    },
                    contact: {
                        part1: 'Conectemos',
                        part2: `Estoy abierto a discutir nuevas oportunidades en desarrollo full-stack, proyectos .NET, o iniciativas de automatización de procesos. Ya sea que busques liderazgo técnico o desarrollo práctico, hablemos sobre cómo puedo contribuir a tu equipo.`,
                    },
                    experience: {
                        title: 'Experiencia Profesional',
                        automation: 'Especialista en Automatización de Procesos',
                        leadership: 'Líder de Equipo y Gerente de Proyectos',
                        development: 'Desarrollador Full-Stack',
                        description: 'Liderando equipos multifuncionales mientras entrego soluciones de automatización de nivel empresarial'
                    }
                }
            }
        }
    });

export default i18n;