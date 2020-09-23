import store from "./store";
import {generateTime, generateEmoji, generateTable} from "./functions";
import contact from "./contact";

const one_liners = require('one-liner-joke');

const initData = [
    { time: generateTime(), type: 'system', label: 'Hello', message: " Welcome to shreyas.dev, Hi ,I am Goofie"+generateEmoji("&#129302;")+" created by Shreyas B to handle his portfolio" },
    { time: generateTime(), type: 'info', label: 'Info', message: ' Terminal Initializing ............' },
    { time: generateTime(), type: 'success', label: 'Success', message: ' Type `username your_name` to get started' },
];

const taskList = {

    defaultTask: {
        description: 'This is a default task aimed to show you the power of this project.',
        defaultTask(pushToList) {
            let i = 0;
            const p = new Promise(resolve => {
                const interval = setInterval(() => {
                    initData[i].time = generateTime() +" ";
                    pushToList(initData[i]);
                    i++;
                    if (!initData[i]) {
                        clearInterval(interval);
                        resolve({ type: 'success', label: 'Success', message: ' Goofie is ready to interact with you.' })
                    }
                }, 500);
            });
            return p
        }
    },
    username : {
        description: 'Tell Goofie who is interacting with it.',
        username(pushToList,input) {
            const p = new Promise(resolve => {
                const interval = setInterval(() => {
                    let username = input.split(' ')[1].trim();
                    store.dispatch('changeUsername', username);
                    clearInterval(interval);
                    resolve({type: 'success', label: 'Success', message: ' Hello <b>' + username + '</b>, Nice to meet you'+generateEmoji("&#128513;")});
                },500);
            });
            return p;
        }
    },
    joke: {
        description: 'Goofie will let you a joke',
        joke(pushToList) {
            const p = new Promise(resolve => {
                let joke = one_liners.getRandomJoke();
                const interval = setInterval(() => {
                    clearInterval(interval);
                    resolve({message:joke.body});
                },500);
            });
            return p;
        }
    },
    ls:{
        description: 'Lists all the available files',
        ls(pushToList){
            const p = new Promise(resolve => {
               for (let file of store.getters.getFiles){
                   pushToList({
                       message:file
                   });
                   resolve({
                       message:''
                   });
               }
            });
            return p;
        }
    },
    cat:{
        description: 'Will print the output of files',
        cat(pushToList,input){
            const p = new Promise(resolve => {
                let file = input.split(" ")[1].trim();
                const interval = setInterval(() => {
                    switch (file) {
                        case 'education.csv' :
                            resolve({
                                message: generateTable(store.getters.getEducation.headers, store.getters.getEducation.rows)
                            });
                            break;
                        case 'experience.csv':
                            resolve({
                                message: generateTable(store.getters.getExperience.headers, store.getters.getExperience.rows, 'terminal-table-5')
                            });
                            break;
                        case 'skills.csv':
                            resolve({
                                message: generateTable(store.getters.getSkills.headers, store.getters.getSkills.rows, 'terminal-table-10')
                            });
                            break;
                        case 'achievements.csv':
                            resolve({
                                message: generateTable(store.getters.getAchievements.headers, store.getters.getAchievements.rows)
                            });
                            break;
                        case 'contact.txt':
                            console.log(contact);
                            pushToList(contact);
                            resolve({
                                message:''
                            });
                            break;
                        default:
                            resolve({
                                type: 'error',
                                label: 'File Not Found',
                                message: ' -> '+file +' was not found, Goofie will look into it ' + generateEmoji('&#128557;')
                            });
                    }
                    clearInterval(interval);
                },500);
            });
            return p;
        }
    },
};

export default taskList;


