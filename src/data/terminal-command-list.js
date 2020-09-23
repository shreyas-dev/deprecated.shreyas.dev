import {generateTable} from "./functions";
import education from "./education";
import experience from "./experience";
import skills from "./skills";
import achievements from "./achievements";
import contact from "./contact";
const commandList = {
    contact: {
        description: 'How to contact author',
        messages: contact

    },
    education:{
        description: 'Goofie will tell Shreyas B\'s education history',
        messages: [
            {message: generateTable(education.headers, education.rows)}
        ]
    },
    experience:{
        description: 'Goofie will tell Shreyas B\'s experience history',
        messages: [
            {message: generateTable(experience.headers, experience.rows,'terminal-table-5')}
        ]
    },
    skills:{
        description: 'Goofie will tell Shreyas B\'s skills',
        messages: [
            {message: generateTable(skills.headers, skills.rows,'terminal-table-10')}
        ]
    },
    achievements:{
        description: 'Goofie will tell Shreyas B\'s Achievements',
        messages: [
            {message: generateTable(achievements.headers, achievements.rows)}
        ]
    }
};

export default commandList;
