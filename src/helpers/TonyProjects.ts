import reactLogo from "../assets/tecLogos/reactLogo.png"
import vueLogo from "../assets/tecLogos/vueLogo.png"
import tsLogo from "../assets/tecLogos/tsLogo.png"

import allAboutMarvel from "../assets/projectsThumbnail/allAboutMarvel.png"
import basicUnitConverter from "../assets/projectsThumbnail/basicUnitConverter.png"
import haxballHockeyBot from "../assets/projectsThumbnail/haxballHockeyBot.png"
import hollyplans from "../assets/projectsThumbnail/hollyplans.png"
import quaisSaoAsChances from "../assets/projectsThumbnail/quaisSaoAsChances.png"
import tonysConversions from "../assets/projectsThumbnail/tonysConversions.png"

export interface Projects {
  id: string
  name: string
  mainTecnologyLogo: string
  thumbnail: string
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
    thumbnail: quaisSaoAsChances,
    tecnologies: ["Vue3", "Vite", "Typescript", "AWS", "WebWorkers", "Python", "CSS"],
    about: "Website made to calculate the odds of each team, according to the league fixtures and table position.",
    link: "https://tonyfilgueiras.github.io/quais-sao-as-chances/",
    year: "2024"
  },
  {
    id: "basic-unit-converter",
    name: "Basic Unit Converter",
    mainTecnologyLogo: reactLogo,
    thumbnail: basicUnitConverter,
    tecnologies: ["React Native", "Typescript", "Expo", "Google MobAds" ],
    about: "Android app made to convert basic units of measurements",
    link: "https://play.google.com/store/apps/details?id=com.expo.buc",
    year: "2024"
  },
  {
    id: "hollyplans",
    name: "HollyPlans",
    mainTecnologyLogo: reactLogo,
    thumbnail: hollyplans,
    tecnologies: ["React", "Vite", "Typescript", "Styled Components", "Google Firebase" ],
    about: "Website made with time constraints for a job application",
    link: "https://hollyplans.netlify.app",
    year: "2024"
  },
  {
    id: "all-about-marvel",
    name: "All About Marvel",
    mainTecnologyLogo: reactLogo,
    thumbnail: allAboutMarvel,
    tecnologies: ["React", "Typescript", "Styled Components", "Axios", "md5" ],
    about: "Website made with time constraints for a job application",
    link: "https://allaboutmarvel.vercel.app/",
    year: "2023"
  },
  {
    id: "haxball-hockey-bot",
    name: "Haxball Hockey Bot",
    mainTecnologyLogo: tsLogo,
    thumbnail: haxballHockeyBot,
    tecnologies: ["Typescript", "NodeJs"],
    about: "Haxball bot made to enforce hockey map rules",
    link: "https://github.com/TonyFilgueiras/haxball-hockey-bot",
    year: "2023"
  },
  {
    id: "tonys-conversions",
    name: "Tony's Conversions",
    mainTecnologyLogo: reactLogo,
    thumbnail: tonysConversions,
    tecnologies: ["React","Typescript"],
    about: "Simple website made to convert basic unit measurements",
    link: "https://tonys-conversions.netlify.app/",
    year: "2022"
  },
];

export default tonyProjects