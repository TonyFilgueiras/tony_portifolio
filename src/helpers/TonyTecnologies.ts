import reactLogo from "../assets/reactLogo.png";
import jsLogo from "../assets/jsLogo.png";
import pythonLogo from "../assets/pythonLogo.png";
import tsLogo from "../assets/tsLogo.png";
import vueLogo from "../assets/vueLogo.png";

import reactBanner from "../assets/banners/reactBanner.png"
import jsBanner from "../assets/banners/jsBanner.png"
// import tsBanner from "../assets/banners/tsBanner.png"
import vueBanner from "../assets/banners/vueBanner.png"
import pythonBanner from "../assets/banners/pythonBanner.png"

interface Tecnologies {
  name: string
  banner: string
  logo: string
  textColor: string
  bgColor: string
  xPosition: number,
  yPosition: number,
  animationDelay: number
}

const tonyTecnologies: Tecnologies[] = [
  {
    name: "Python",
    banner: pythonBanner,
    logo: pythonLogo,
    textColor: "#FFE873",
    bgColor: '#306998',
    xPosition: 40,
    yPosition: 73,
    animationDelay: 1.4
  },
  {
    name: "Javascript",
    banner: jsBanner,
    logo: jsLogo,
    textColor: "#323330",
    bgColor: '#F0DB4F',
    xPosition: 20,
    yPosition: 5,
    animationDelay: 1
  },
  {
    name: "Typescript",
    banner: "",
    logo: tsLogo,
    textColor: "#dddddd",
    bgColor: '#3178c6',
    xPosition: 60,
    yPosition: 5,
    animationDelay: 0.5
  },
  {
    name: "React",
    banner: reactBanner,
    logo: reactLogo,
    textColor: "#88dded",
    bgColor: '#1c2c4c',
    xPosition: 10,
    yPosition: 50,
    animationDelay: 0.1
  },
  {
    name: "Vue",
    banner: vueBanner,
    logo: vueLogo,
    textColor: "#41B883",
    bgColor: '#35495E',
    xPosition: 80,
    yPosition: 43,
    animationDelay: 1.7
  },

];

export default tonyTecnologies