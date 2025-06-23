import { IconType } from "react-icons";

export interface NavLink {
  name: string;
  link: string;
}

export interface Word {
  text: string;
  icon: IconType;
  color: string;
}

export interface CounterItem {
  value: number;
  suffix: string;
  label: string;
  icon: IconType;
  color: string;
}

export interface Ability {
  imgPath: string;
  title: string;
  desc: string;
}

export interface TechStackImg {
  name: string;
  imgPath: string;
}

export interface TechStackIcon {
  name: string;
  modelPath: string;
  scale: number;
  rotation: [number, number, number];
}

export interface ExpCard {
  review: string;
  imgPath: string;
  logoPath: string;
  iconType: "react" | "nodejs" | "git" | "unity" | "javascript" | "typescript";
  title: string;
  date: string;
  responsibilities: string[];
  technologies: string[];
}

export interface Logo {
  name: string;
  imgPath: string;
}

export interface Social {
  name: string;
  icon: IconType;
  link: string;
}

export interface BadgeItem {
  title: string;
  className?: string;
}

export interface ImageData {
  src: string;
  alt: string;
}

export interface ExtraClasses {
  cardWrapper?: string;
  container?: string;
  grid?: string;
  image?: string;
  content?: string;
  btnDemo?: string;
  btnCode?: string;
  isBigImage?: boolean;
}

export type ProjectCard = {
  title: string;
  description: string;
  demo_url?: string;
  code_url?: string;
  badges: BadgeItem[];
  img: ImageData;
  extras_className?: ExtraClasses;
  delay?: number; // animation delay per project
};
