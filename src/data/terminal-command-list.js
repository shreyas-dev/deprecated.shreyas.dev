import {generateTable} from "./functions";

const education = {
    headers: ['from', 'to', 'university', 'degree'],
    rows:[
        {
            from: 2013,
            to: 2017,
            university: 'Sahyadri College of Engineering',
            degree: "Bachelor of Engineering in Computer Science"
        },
        {
            from: 2011,
            to: 2013,
            university: 'Brilliant PU College',
            degree:'Pre-University Degree'
        },
        {
            from: '-',
            to: 2011,
            university: 'Canara High School',
            degree:'High School'
        }
    ]
};

const experience = {
    headers: ['from','to','company','designation','role'],
    rows:[
        {
            from:'Oct, 2019',
            to:'-',
            company: 'OlaElectric (Olacabs)',
            designation:'SDE - 2',
            role:'Was a part of Data Platform Team , </br>we created a platform framework for data </br> coming from all sorts of IoT devices </br> such as EVehicles,Batteries & Chargers',
        },
        {
            from: 'Oct, 2018',
            to:'Sep, 2019',
            company: 'OlaCabs',
            designation: 'SDE - 1',
            role: 'Was a part of Data Platform Team ,</br> Wrote big data jobs in Spark, Flink </br>for real time alerting and notification,</br> also wrote jobs for data warehousing(hive).'
        },
        {
            from:'Jul, 2017',
            to:'Sep, 2018',
            company: 'OlaCabs',
            designation: 'SDET - 1',
            role: 'Was part of Automation Team, </br> Created a fully fledged Appium based framework </br> for fully testing OlaPlay devices.'
        }
    ]
};

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
        description: 'Provides Shreyas B\'s education history',
        messages: [
            {message: generateTable(education.headers, education.rows)}
        ]
    },
    experience:{
        description: 'Provides Shreyas B\'s experience history',
        messages: [
            {message: generateTable(experience.headers, experience.rows)}
        ]
    }
};

export default commandList;
