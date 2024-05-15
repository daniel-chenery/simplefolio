import initScrollReveal from "./scripts/scrollReveal";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";
import { initialiseMarquee } from "./scripts/marquee";

initialiseMarquee();

const skill = targetElements.find(e => e.element.includes(':not(.marquee__cloned)'));
if (skill) {
    const skillNode = document.querySelector(skill.element);

    if (skillNode) {
        const target = '.' + skillNode.className.replace(' ', '.') + '.marquee__cloned';
        const config = {
            viewOffset: {
                right: -skillNode.scrollWidth
            }
        };

        targetElements.push({
            element: target,
            animation: Object.assign(config, skill.animation)
        });
    }
}

initScrollReveal(targetElements, defaultProps);