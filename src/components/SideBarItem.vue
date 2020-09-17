<template>
    <div>
        <div>
            <h3 class="section-title">
                {{node.section}}
                <span>
                    <ChevronDownIcon style="padding-top: 2%" class="dropdown-icon" v-if="!subMenuDisplayed" @click="toggleSubMenu()"></ChevronDownIcon>
                    <ChevronUpIcon class="dropdown-icon" style="padding-top: 2%" v-else @click="toggleSubMenu()"></ChevronUpIcon>
                </span>
            </h3>
        </div>
        <ul v-show="subMenuDisplayed">
            <li v-for="item in node.topics" :key="item.title">
                <g-link class="topic" :to="'/' + item.slug">{{item.title}}</g-link>
    <!--            <ul v-if="checkAnchors(node.slug, item.slug)" v-for="{ node } in $static.docs.edges" :key="node.id">-->
    <!--                <li v-for="heading in node.headings" :key="heading.value">-->
    <!--                    <a class="sub-topic" :href="'/' + item.slug + heading.anchor">{{heading.value}}</a>-->
    <!--                </li>-->
    <!--            </ul>-->
            </li>
        </ul>
    </div>

</template>

<script>
    import {ChevronDownIcon,ChevronUpIcon} from 'vue-feather-icons';
    export default {
        props: {
            node: {
                required : true,
            }
        },
        data(){
            return {
                subMenuDisplayed: false,
            }
        },
        created() {
            for (let item of this.node.topics){
                if (item.slug === this.$route.params.slug) {
                    this.subMenuDisplayed = true;
                    break;
                }
            }
        },
        components:{
            ChevronDownIcon:ChevronDownIcon,
            ChevronUpIcon:ChevronUpIcon
        },
        methods:{
            toggleSubMenu(){
                this.subMenuDisplayed = !this.subMenuDisplayed;
            },
        },
    }
</script>

<style lang="scss" scoped>
    ul {
        list-style: none;
        padding: 0;
        margin: 0;

        a {
            text-decoration: none;
            color: inherit;
            padding: 5px 0;
            display: block;

            &.active {
                color: $brandPrimary;
            }
        }
    }

    .section {
        margin-bottom: 30px;
    }

    .section-title {
        text-transform: uppercase;
        font-size: 12px;
        margin-bottom: 20px;
        opacity: .3;
        letter-spacing: .15em;
        font-weight: 700;
    }

    .topic {
        font-weight: 700;
    }

    .sub-topic {
        font-size: .875rem;
        position: relative;
        opacity: .8;

        &::after {
            content: '';
            transition: opacity .15s ease-in-out;
            width: 6px;
            height: 6px;
            background: $brandPrimary;
            border-radius: 100%;
            display: block;
            opacity: 0;
            position: absolute;
            top: 13px;
            left: -15px;
        }

        &.current {
            &::after {
                opacity: 1;
            }
        }
    }
</style>
