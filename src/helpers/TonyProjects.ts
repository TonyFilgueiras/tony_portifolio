import pythonLogo from "../assets/pythonLogo.png"
import reactLogo from "../assets/reactLogo.png"
import vueLogo from "../assets/vueLogo.png"
import tsLogo from "../assets/tsLogo.png"
import jsLogo from "../assets/jsLogo.png"

interface Projects {
  id: string
  name: string
  mainTecnologyLogo: string
  tecnologies: string[]
  about: string
  link: string
  year: string
}

const tonyProjects: Projects[] = [
  {
    id: "quais-sao-as-chances",
    name: "Quais são as chances",
    mainTecnologyLogo: vueLogo,
    tecnologies: ["Vue3", "Vite", "Typescript", "AWS", "WebWorkers", "Python", "CSS"],
    about: "Website made to calculate the odds of each team, according to the league fixtures and table position.",
    link: "https://tonyfilgueiras.github.io/quais-sao-as-chances/",
    year: "2024"
  },
  {
    id: "basic-unit-converter",
    name: "Basic Unit Converter",
    mainTecnologyLogo: reactLogo,
    tecnologies: ["React Native", "Typescript", "Expo", "Google MobAds" ],
    about: "Android app made to convert basic units od measurements",
    link: "https://play.google.com/store/apps/details?id=com.tonyfilgueiras.basic",
    year: "2024"
  },
  {
    id: "hollyplans",
    name: "HollyPlans",
    mainTecnologyLogo: reactLogo,
    tecnologies: ["React", "Vite", "Typescript", "Styled Components", "Google Firebase" ],
    about: "Website made with time constraints for a job application",
    link: "https://hollyplans.netlify.app",
    year: "2024"
  },
  {
    id: "all-about-marvel",
    name: "All About Marvel",
    mainTecnologyLogo: reactLogo,
    tecnologies: ["React", "Typescript", "Styled Components", "Axios", "md5" ],
    about: "Website made with time constraints for a job application",
    link: "https://allaboutmarvel.vercel.app/",
    year: "2023"
  },
  {
    id: "haxball-hockey-bot",
    name: "Haxball Hockey Bot",
    mainTecnologyLogo: tsLogo,
    tecnologies: ["Typescript", "NodeJs"],
    about: "Haxball bot made to enforce hockey map rules",
    link: "https://github.com/TonyFilgueiras/haxball-hockey-bot",
    year: "2023"
  },
  {
    id: "tonys-conversions",
    name: "Tony's Conversions",
    mainTecnologyLogo: reactLogo,
    tecnologies: ["React","Typescript"],
    about: "Simple website made to convert basic unit measurements",
    link: "https://tonys-conversions.netlify.app/",
    year: "2022"
  },
];

export default tonyProjects