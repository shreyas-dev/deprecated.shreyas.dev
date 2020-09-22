import {generateTable} from "./functions";
import education from "./education";
import experience from "./experience";
import skills from "./skills";
const commandList = {
    contact: {
        description: 'How to contact author',
        messages: [
            { message: 'Website: <a href="https://islasher.com" class="terminal-a"> https://islasher.com </a>' },
            { message: 'Email: xuxiaofei915@gmail.com' },
            { message: 'Github:  <a> https://github.com/dongsuo</a>' },
            { message: 'WeChat Offical Account: dongsuo' }
        ]
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
            {message: generateTable(experience.headers, experience.rows)}
        ]
    },
    skills:{
        description: 'Goofie will tell Shreyas B\'s skills',
        messages: [
            {message: generateTable(skills.headers, skills.rows)}
        ]
    }
};

export default commandList;
