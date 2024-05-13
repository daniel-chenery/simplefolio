import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";
import { gravatar } from './scripts/gravatar';

initScrollReveal(targetElements, defaultProps);
initTiltEffect();

gravatar(document.querySelector('img[alt="Profile Image"]'), 'daniel@itsdaniel0.com');
