<template>
  <Layout>
    <h1>
      {{ $page.doc.title }}
    </h1>
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
}
.tags{
  padding-bottom: 5vh;
}
</style>
