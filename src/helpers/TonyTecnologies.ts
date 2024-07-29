import reactLogo from "../assets/tecLogos/reactLogo.png";
import pythonLogo from "../assets/tecLogos/pythonLogo.png";
import tsLogo from "../assets/tecLogos/tsLogo.png";
import vueLogo from "../assets/tecLogos/vueLogo.png";

import awsLogo from "../assets/tecLogos/awsLogo.png";
import cssLogo from "../assets/tecLogos/cssLogo.png";
import figmaLogo from "../assets/tecLogos/figmaLogo.png";
import godotLogo from "../assets/tecLogos/godotLogo.png";
import htmlLogo from "../assets/tecLogos/htmlLogo.png";
import javaLogo from "../assets/tecLogos/javaLogo.png";
import jsLogo from "../assets/tecLogos/jsLogo.png";
import mysqlLogo from "../assets/tecLogos/mysqlLogo.png";

import reactBanner from "../assets/tecBanners/reactBanner.png";
import tsBanner from "../assets/tecBanners/tsBanner.png";
import vueBanner from "../assets/tecBanners/vueBanner.png";
import pythonBanner from "../assets/tecBanners/pythonBanner.png";

import awsBanner from "../assets/tecBanners/awsBanner.png";
import cssBanner from "../assets/tecBanners/cssBanner.png";
import figmaBanner from "../assets/tecBanners/figmaBanner.png";
import godotBanner from "../assets/tecBanners/godotBanner.png";
import htmlBanner from "../assets/tecBanners/htmlBanner.png";
import javaBanner from "../assets/tecBanners/javaBanner.png";
import jsBanner from "../assets/tecBanners/jsBanner.png";
import mysqlBanner from "../assets/tecBanners/mysqlBanner.png";


export interface Tecnologies {
  name: string;
  banner: string;
  logo: string;
  textColor: string;
  bgColor: string;
  xPosition: number;
  yPosition: number;
  animationDelay: number;
}

export interface OtherTecnologies {
  name: string,
  logo: string,
  banner: string;
  textColor: string;
  bgColor: string;
}

const tonyTecnologies: Tecnologies[] = [
  {
    name: "Python",
    banner: pythonBanner,
    logo: pythonLogo,
    textColor: "#FFE873",
    bgColor: "#306998",
    xPosition: 40,
    yPosition: 73,
    animationDelay: 1.4,
  },
  {
    name: "Typescript",
    banner: tsBanner,
    logo: tsLogo,
    textColor: "#dddddd",
    bgColor: "#3178c6",
    xPosition: 60,
    yPosition: 5,
    animationDelay: 2.5,
  },
  {
    name: "React",
    banner: reactBanner,
    logo: reactLogo,
    textColor: "#88dded",
    bgColor: "#1c2c4c",
    xPosition: 10,
    yPosition: 50,
    animationDelay: 0.1,
  },
  {
    name: "Vue",
    banner: vueBanner,
    logo: vueLogo,
    textColor: "#41B883",
    bgColor: "#35495E",
    xPosition: 80,
    yPosition: 43,
    animationDelay: 5.4,
  },
];

export const otherTecnologies: OtherTecnologies[] = [
  {
    name: "AWS",
    logo: awsLogo,
    banner: awsBanner,
    textColor: "#ff9900",
    bgColor: "#232f3e",
  },
  {
    name: "Figma",
    logo: figmaLogo,
    banner: figmaBanner,
    textColor: "#f24e1e",
    bgColor: "#1abcfe",
    
  },
  {
    name: "Godot",
    logo: godotLogo,
    banner: godotBanner,
    textColor: "#8f9498",
    bgColor: "#0e4f53",
    
  },
  {
    name: "Javascript",
    logo: jsLogo,
    banner: jsBanner,
    textColor: "#323330",
    bgColor: '#F0DB4F',
    
  },
  {
    name: "Java",
    logo: javaLogo,
    banner: javaBanner,
    textColor: "#f36c4e",
    bgColor: "#0156a8",
    
  },
  {
    name: "HTML",
    logo: htmlLogo,
    banner: htmlBanner,
    textColor: "#f06529",
    bgColor: "#000000",
    
  },
  {
    name: "CSS",
    logo: cssLogo,
    banner: cssBanner,
    textColor: "#ebebeb",
    bgColor: "#2965f1",
    
  },
  {
    name: "mysql",
    logo: mysqlLogo,
    banner: mysqlBanner,
    textColor: "#f29111",
    bgColor: "#00758f",
    
   },
];

export default tonyTecnologies;
