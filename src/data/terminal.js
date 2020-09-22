import taskList from "./terminal-task-list";
import commandList from "./terminal-command-list";
import education from "./education";
import experience from "./experience";
import skills from "./skills";


const state = {
    task_list: taskList,
    command_list: commandList,
    terminal_username: "guest",
    prompt: "guest@shreyas.dev > ",
    fileList: ['education.csv','experience.csv','achievements.csv','skills.csv'],
    my_education: education,
    my_experience: experience,
    my_skills : skills
};


const getters = {
    getTasks(state){
        return  state.task_list;
    },
    getUserName(state){
        return state.terminal_username;
    },
    getCommands(state){
        return state.command_list;
    },
    getPrompt(state){
        return state.prompt;
    },
    getFiles(state){
        return state.fileList;
    },
    getEducation(state){
        return state.my_education;
    },
    getExperience(state){
        return state.my_experience;
    },
    getSkills(state){
        return state.my_skills;
    }
};

const mutations = {
  'CHANGE_USERNAME'(state,username){
      state.terminal_username = username;
      state.prompt = username+"@shreyas.dev > ";
  }
};

const actions = {
    changeUsername : ({commit},username)=>{
        commit('CHANGE_USERNAME',username);
    }
};
export default {
    getters,
    state,
    mutations,
    actions
}

