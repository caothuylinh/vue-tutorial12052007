<template>
  <div class="home-page">
    <list-blog :blog-data="blogs" :key="blogs"  :limits=3 :currentPage="currentPage"></list-blog>
    <paginator :total="blogs.length" :limits=3 :current="currentPage" @changePage="index => {currentPage = index}"></paginator>
  </div>
</template>

<script>
  import listBlog from './common/ListBlog.vue'
  import paginator from './common/Paginator.vue'
  import data from '../assets/json/sampleblog.json'

  export default {
    name: 'home-page',
    components: {
      listBlog,
      paginator
    },
    data () {
      return {
        blogs: data,
        currentPage: 1
      }
    },
    methods: {
      logdebug () {
//      console.log (JSON.stringify (data))
        console.log ('logdebug')
      }
    },
    created: function () {
      this.logdebug ()
    }
  }
</script>
