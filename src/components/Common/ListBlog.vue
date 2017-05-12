<template>
  <div>
  	<router-link v-for="blogInfo in getBlogsInCurrentPage()" v-bind:to="'/frontend-training/' + blogInfo.id" :key="blogInfo.id">
		<blog :blog-data="blogInfo" ></blog>
	</router-link>
  </div>
</template>

<script>
  import blog from './Blog.vue'
  
  export default {
    components: {
      blog
    },
    props: {
      blogData: {
        type: Array
      },
      limits: {
        type: Number
      },
      currentPage: {
        type: Number
      }
    },
    data () {
      return {
        blogsInCurrentPage: []
      }
    },
    methods: {
      getBlogsInCurrentPage () {
        let fromIndex = (this.currentPage - 1) * this.limits
        let toIndex = this.currentPage * this.limits
        return this.blogData.slice (fromIndex, toIndex)
      }
    }
  }
</script>
