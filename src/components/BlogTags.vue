<template>
    <div>
        <br>
        <span>
            Tags:
        </span>
        <g-link v-for="tag in tags" :key="tag.id" :to="tag.path">
            {{tag.id}}
        </g-link>
    </div>
</template>

<script>
    export default {
        props:{
            tags: {
                required: true
            }
        },
    }
</script>

<style lang="scss" scoped>
span{
    .dark & {
        color: $textDark;
    }
    .bright & {
        color: $textBright;
    }
}
a{
    .dark & {
        background: $sidebarDark;
        color: $textDark;
        mso-border-shadow: shade($sidebarDark, 40%);
        border-color: $sidebarBright;
    }
    .bright & {
        background: $sidebarBright;
        color: $textBright;
        mso-border-shadow: shade($sidebarBright, 10%);
        border-color: $sidebarDark;
    }
}

a{
    border-width: 1px;
    border-style: solid;
    padding: 7px;
    border-radius:10px;
    margin-left: 1%;
}
a:link:not(#exclude), a:visited:not(#exclude) {
    text-decoration: none;
    cursor: pointer;
}
</style>
