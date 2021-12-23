import Car from '../images/svg-1.svg';
import Cofrinho from '../images/svg-2.svg';
import Account from '../images/svg-3.svg';

export const infoSectionOne = {
  id: 'about',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Premium Bank',
  headline: 'Unlimited Transactions with zero fess',
  description: 'Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fess',
  buttonLabel: 'Get started',
  imgStart: false,
  img: Car,
  alt: 'Car',
  dark: true,
  primary: true,
  darkText: false,
};

export const infoSectionTwo = {
  id: 'discover',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Unlimited Access',
  headline: 'Login to your account at any time',
  description: 'We have you covered no matter where you are located. All you need is an internet connection and a phone or computer',
  buttonLabel: 'Learn More',
  imgStart: true,
  img: Cofrinho,
  alt: 'PiggyBank',
  dark: false,
  primary: false,
  darkText: true,
};

export const infoSectionThree = {
  id: 'signup',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Join our Team',
  headline: 'Creating an account is extremely easy',
  description: "Get everything set up and ready in under 10 minutes. All you need to do is add your information and you're ready to go",
  buttonLabel: 'Start Now',
  imgStart: false,
  img: Account,
  alt: 'Paper',
  dark: false,
  primary: false,
  darkText: true,
};
