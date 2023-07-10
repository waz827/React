import Chance from "chance";
const chance = new Chance();

export const randomUUID = () => chance.guid();
export const randomName = () => chance.name();
export const randomEmail = () => chance.email();
export const randomId = () => chance.fbid(); //facebook id
export const randomJobTitle = () => chance.profession();
export const randomCompanyName = () => chance.company();
export const randomSentence = (words = 5) => chance.sentence();
export const randomTitleText = (words = 5) => chance.sentence();
export const randomParagraps = (sentence = 3) => chance.paragraph();
