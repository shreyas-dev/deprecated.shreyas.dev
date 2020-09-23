import {generateEmoji,generateAnchorTags} from "./functions";

const contact = [
    { message: generateAnchorTags('mailto:contact@shreyas.dev','Email: contact@shreyas.dev'+generateEmoji("&#x1F4E7;"))},
    { message: generateAnchorTags('https://www.github.com/shreyas-dev','GitHub: Check Shreyas\'s Repositories'+generateEmoji("&#x1F5A5;"))},
    { message: generateAnchorTags('https://stackoverflow.com/users/13612096/shreyas-b','StackOverFlow: Check Shreyas\'s Profile'+generateEmoji("&#x1F680;")) },
    {message: generateAnchorTags('https://leetcode.com/archduke/','LeetCode: Check Shreyas\'s Problem Solving Skills'+generateEmoji("&#x1F60E;"))},
    { message: generateAnchorTags('https://www.shreyas.dev','Goofie is always available here'+generateEmoji("&#x1F310;"))},
];

export default contact;
