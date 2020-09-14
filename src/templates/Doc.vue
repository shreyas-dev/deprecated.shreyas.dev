<template>
  <Layout class="layout">
    <h1>
      {{ $page.doc.title }}
    </h1>
    <div class="page-contents">
      <h3 style="text-align: center">On this Page</h3>
      <ul>
        <li v-for="heading in $page.doc.headings" :key="heading.value">
          <g-link class="sub-topic" :to="$page.doc.path + heading.anchor">{{heading.value}}</g-link>
          <br>
        </li>
      </ul>
    </div>
     <div class="markdown" v-html="$page.doc.content" />
    <BlogTags class="tags" :tags="$page.doc.tags"></BlogTags>
    <Disqus :identifier = "$page.doc.id" :title="$page.doc.title"/>
    <Sharethis
            share-this-embed-url="https://platform-api.sharethis.com/js/sharethis.js#property=5f5fc50a6c001000197113c5&product=sticky-share-buttons"
    />
  </Layout>
</template>

<page-query>
query Doc ($path: String!) {
  doc: doc (path: $path) {
    id
    title
    path
    headings{
      value
      depth
      anchor
    }
    date (format: "D. MMMM YYYY")
    timeToRead
    content
    tags {
      id
      path
    }
  }
}
</page-query>

<script>
import BlogTags from "../components/BlogTags";
import Sharethis from 'vue-sharethis';
import Sticky from 'vue-sticky-directive';
export default {
  metaInfo() {
    return {
      title: this.$page.doc.title,
      meta: [
        { key: 'description', name: 'description', content: this.$page.doc.description }
      ]
    }
  },
  components:{
    BlogTags,
    Sharethis
  },
  directives:{
    Sticky
  }
}
</script>


<style lang="scss" scoped>

/deep/ > p {
  opacity: .8;
}

/deep/ > h2 {
  padding-top: 100px;
  margin-top: -80px;

  @include respond-above(md) {
    font-size: 2rem;
  }
}

/deep/ > p > img {
    max-width: 100%;
  }

.markdown {
  padding-bottom: 5vh;
  width: 75%;
}
.layout{
  display:initial;
}
.tags{
  padding-bottom: 5vh;
}
.page-contents{
  position: -webkit-sticky;
  position: sticky;
  float: right;
  top: 20%;
  right: 2%;
  width: 20%;
  .dark & {
    color: $textDark;
    background: $sidebarDark;
  }
  .bright & {
    color: $textBright;
    background: $sidebarBright;
  }
}
.page-contents ul li{
  list-style-type: disc;
  text-align: left;
}
.page-contents ul {
  padding-left: 10%;
}


.page-contents a:link:not(#exclude), a:visited:not(#exclude) {
  text-decoration: none;
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
  .dark & {
    color: $textDark;
  }
  .bright & {
    color: $textBright;
  }
}
</style>
