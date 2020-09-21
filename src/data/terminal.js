import taskList from "./terminal-task-list";
import commandList from "./terminal-command-list";


const state = {
    task_list: taskList,
    command_list: commandList,
    terminal_username: "guest",
    prompt: "guest@shreyas.dev > "
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

