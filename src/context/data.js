import homeFeatureIconOne from '../assets/home/desktop/illustration-passionate.svg';
import homeFeatureIconTwo from '../assets/home/desktop/illustration-resourceful.svg';
import homeFeatureIconThree from '../assets/home/desktop/illustration-friendly.svg';

import {
  FaFacebookSquare,
  FaYoutube,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from 'react-icons/fa';

import webDesignProjectImageOne from '../assets/web-design/desktop/image-express.jpg';
import webDesignProjectImageTwo from '../assets/web-design/desktop/image-transfer.jpg';
import webDesignProjectImageThree from '../assets/web-design/desktop/image-photon.jpg';
import webDesignProjectImageFour from '../assets/web-design/desktop/image-builder.jpg';
import webDesignProjectImageFive from '../assets/web-design/desktop/image-blogr.jpg';
import webDesignProjectImageSix from '../assets/web-design/desktop/image-camp.jpg';

import appDesignProjectImageOne from '../assets/app-design/desktop/image-airfilter.jpg';
import appDesignProjectImageTwo from '../assets/app-design/desktop/image-eyecam.jpg';
import appDesignProjectImageThree from '../assets/app-design/desktop/image-faceit.jpg';
import appDesignProjectImageFour from '../assets/app-design/desktop/image-todo.jpg';
import appDesignProjectImageFive from '../assets/app-design/desktop/image-loopstudios.jpg';

import graphicDesignProjectImageOne from '../assets/graphic-design/desktop/image-change.jpg';
import graphicDesignProjectImageTwo from '../assets/graphic-design/desktop/image-boxed-water.jpg';
import graphicDesignProjectImageThree from '../assets/graphic-design/desktop/image-science.jpg';

import locationCtaIconOne from '../assets/shared/desktop/illustration-canada.svg';
import locationCtaIconTwo from '../assets/shared/desktop/illustration-australia.svg';
import locationCtaIconThree from '../assets/shared/desktop/illustration-united-kingdom.svg';

import locationMapOne from '../assets/locations/desktop/image-map-canada.png';
import locationMapTwo from '../assets/locations/desktop/image-map-australia.png';
import locationMapThree from '../assets/locations/desktop/image-map-united-kingdom.png';

export const linksData = [
  { id: 1, text: 'Our Company', path: '/OurCompany' },
  { id: 2, text: 'Locations', path: '/Locations' },
  { id: 3, text: 'Contact', path: '/Contact' },
];

export const homeFeaturesData = [
  {
    id: 1,
    icon: homeFeatureIconOne,
    title: 'Passionate',
    description:
      'Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.',
  },
  {
    id: 2,
    icon: homeFeatureIconTwo,
    title: 'Resourceful',
    description:
      'Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.',
  },
  {
    id: 3,
    icon: homeFeatureIconThree,
    title: 'Friendly',
    description:
      'We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.',
  },
];

export const socialsData = [
  { id: 1, icon: <FaFacebookSquare />, alt: 'facebook icon' },
  { id: 2, icon: <FaYoutube />, alt: 'youtube icon' },
  { id: 3, icon: <FaTwitter />, alt: 'twitter icon' },
  { id: 4, icon: <FaPinterest />, alt: 'pinterest icon' },
  { id: 5, icon: <FaInstagram />, alt: 'instagram icon' },
];

export const webDesignProjectsData = [
  {
    id: 1,
    image: webDesignProjectImageOne,
    title: 'Express',
    description: 'A multi-carrier shipping website for ecommerce businesses',
  },
  {
    id: 2,
    image: webDesignProjectImageTwo,
    title: 'Transfer',
    description:
      'Site for low-cost money transfers and sending money within seconds',
  },
  {
    id: 3,
    image: webDesignProjectImageThree,
    title: 'Photon',
    description:
      'A state-of-the-art music player with high-resolution audio and DSP effects',
  },
  {
    id: 4,
    image: webDesignProjectImageFour,
    title: 'Builder',
    description:
      'Connects users with local contractors based on their location',
  },
  {
    id: 5,
    image: webDesignProjectImageFive,
    title: 'Blogr',
    description:
      'Blogr is a platform for creating an online blog or publication',
  },
  {
    id: 6,
    image: webDesignProjectImageSix,
    title: 'Camp',
    description:
      'Get expert training in coding, data, design, and digital marketing',
  },
];

export const appDesignProjectsData = [
  {
    id: 1,
    image: appDesignProjectImageOne,
    title: 'Airfilter',
    description:
      'Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.',
  },
  {
    id: 2,
    image: appDesignProjectImageTwo,
    title: 'Eyecam',
    description:
      'Product that lets you edit your favorite photos and videos at any time',
  },
  {
    id: 3,
    image: appDesignProjectImageThree,
    title: 'Faceit',
    description:
      'Get to meet your favorite internet superstar with the faceit app',
  },
  {
    id: 4,
    image: appDesignProjectImageFour,
    title: 'Todo',
    description: 'A todo app that features cloud sync with light and dark mode',
  },
  {
    id: 5,
    image: appDesignProjectImageFive,
    title: 'Loopstudios',
    description: 'A VR experience app made for Loopstudios',
  },
];

export const graphicDesignProjectsData = [
  {
    id: 1,
    image: graphicDesignProjectImageOne,
    title: 'Tim Brown',
    description: 'A book cover designed for Tim Brown’s new release, ‘Change’',
  },
  {
    id: 2,
    image: graphicDesignProjectImageTwo,
    title: 'Boxed Water',
    description: 'A simple packaging concept made for Boxed Water',
  },
  {
    id: 3,
    image: graphicDesignProjectImageThree,
    title: 'Science!',
    description: 'A poster made in collaboration with the Federal Art Project',
  },
];

export const locationsCtaData = [
  { id: 1, icon: locationCtaIconOne, title: 'Canada' },
  { id: 2, icon: locationCtaIconTwo, title: 'Australia' },
  { id: 3, icon: locationCtaIconThree, title: 'United Kingdom' },
];

export const locationsData = [
  {
    id: 1,
    map: locationMapOne,
    location: 'Canada',
    officeInfo: {
      office: 'Designo Central Office',
      address: ['3886 Wellington Street', 'Toronto, Ontario M9C 3J5'],
    },
    contactInfo: {
      title: 'Contact',
      phone: 'P : +1 253-863-8967',
      email: 'M : contact@designo.co',
    },
    invert: false,
  },
  {
    id: 2,
    map: locationMapTwo,
    location: 'Australia',
    officeInfo: {
      office: 'Designo AU Office',
      address: ['19 Balonne Street', 'New South Wales 2443'],
    },
    contactInfo: {
      title: 'Contact',
      phone: 'P : (02) 6720 9092',
      email: 'M : contact@designo.au',
    },
    invert: true,
  },
  {
    id: 3,
    map: locationMapThree,
    location: 'United Kingdom',
    officeInfo: {
      office: 'Designo UK Office',
      address: ['13 Colorado Way', 'Rhyd-y-fro SA8 9GA'],
    },
    contactInfo: {
      title: 'Contact',
      phone: 'P : 078 3115 1400',
      email: 'M : contact@designo.uk',
    },
    invert: false,
  },
];
