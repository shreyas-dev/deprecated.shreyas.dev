<template>
    <Layout>
        <div style="height: 100%">
            <vue-terminal
            :title="title"
            :prompt="prompt"
            :commandList= "commandList"
            default-task="defaultTask"
            default-task-commandd="init shreyas.dev"
            :task-list="taskList"
            style="width:100%;margin:0 auto; height: 2000px;"
            ></vue-terminal>
        </div>
    </Layout>
</template>

<script>
    import VueTerminal from '@/components/VueTerminal';
    import {commandList,taskList,terminalUsername} from '../data/terminal.js';
    export default {
        components:{
            VueTerminal
        },
        // head:{
        //     link:[
        //         {
        //             rel: "stylesheet",
        //             href:"https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        //         }
        //     ]
        // },
        data(){
            return {
                taskList: this.$store.getters.getTasks,
                commandList:this.$store.getters.getCommands,
                title: "www.shreyas.dev"
            }
        },
        computed:{
            username() {
                return this.$store.getters.getUserName;
            },
            prompt() {
                return this.$store.getters.getPrompt;
            }
        }
    }
</script>
