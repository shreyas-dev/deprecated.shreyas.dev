import store from "./store";
import {generateTime,generateEmoji} from "./functions";

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
};

export default taskList;


