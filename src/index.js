import initScrollReveal from "./scripts/scrollReveal";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";
import { initialiseMarquee } from "./scripts/marquee";
import { SkillList } from './scripts/list';

initialiseMarquee();
initScrollReveal(targetElements, defaultProps);

new SkillList().initalise();