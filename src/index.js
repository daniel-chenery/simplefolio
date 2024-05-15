import initScrollReveal from "./scripts/scrollReveal";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";
import { initialiseMarquee } from "./scripts/marquee";

initialiseMarquee();
initScrollReveal(targetElements, defaultProps);