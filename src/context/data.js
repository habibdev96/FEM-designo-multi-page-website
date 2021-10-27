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
