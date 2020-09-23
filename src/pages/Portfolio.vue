<template>
    <Layout>
        <div>
            <vue-terminal
            :title="title"
            :prompt="prompt"
            :commandList= "commandList"
            default-task="defaultTask"
            default-task-commandd="init shreyas.dev"
            :task-list="taskList"
            style="width:85%;height: 2000px;"
            ref="terminal"
            ></vue-terminal>
        </div>
        <div class="shortcuts-portfolio">
            <h4 style="text-align: center">Let Goofie help you know Shreyas</h4>
            <ul>
                <li><a @click="sendToTerminal('cat education.csv')" class="shortcuts-anchor">Education</a></li>
                <li><a @click="sendToTerminal('cat experience.csv')" class="shortcuts-anchor">Experience</a></li>
                <li><a @click="sendToTerminal('cat skills.csv')" class="shortcuts-anchor">Languages & Skills</a></li>
                <li><a @click="sendToTerminal('cat achievements.csv')" class="shortcuts-anchor">Achievements</a></li>
                <li><a @click="sendToTerminal('contact')" class="shortcuts-anchor">Contact Shreyas</a></li>
                <li><a @click="sendToTerminal('email')" class="shortcuts-anchor">Send a Mail</a></li>
            </ul>
        </div>
        <div class="shortcuts-extras">
            <h4 style="text-align: center">See what Goofie Can do!</h4>
            <ul>
                <li><a @click="sendToTerminal('joke')" class="shortcuts-anchor">Ask Goofie to tell a Joke</a></li>
                <li><a @click="sendToTerminal('username sample_user')" class="shortcuts-anchor">Tell Goofie your name</a></li>
                <li><a @click="sendToTerminal('help')" class="shortcuts-anchor">Ask Goofie For Help</a></li>
            </ul>
        </div>
    </Layout>
</template>

<script>
    import VueTerminal from '@/components/VueTerminal';
    export default {
        components:{
            VueTerminal
        },
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
        },
        methods:{
            sendToTerminal(command){
                this.$refs.terminal.setCommandFromParent(command);
            }
        }
    }
</script>

<style lang="scss">
    .shortcuts-portfolio{
        float: right;
        position: absolute;
        top: 10%;
        right: -1%;
        margin-top: 2%;
        width: 19%;
        .dark & {
            color: $textDark;
            background: $sidebarDark;
        }
        .bright & {
            color: $textBright;
            background: $sidebarBright;
        }
    }
    .shortcuts-extras{
        float: right;
        position: absolute;
        top: 50%;
        right: -1%;
        margin-top: 2%;
        width: 19%;
        .dark & {
            color: $textDark;
            background: $sidebarDark;
        }
        .bright & {
            color: $textBright;
            background: $sidebarBright;
        }
    }
    .shortcuts-anchor:hover{
        cursor: pointer;
    }
    .shortcuts-anchor{
        font-size: .85em;
        .dark & {
            color: $textDark;
        }
        .bright & {
            color: $textBright;
        }
    }
</style>
