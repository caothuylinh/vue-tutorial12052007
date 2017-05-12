<template>
  <div class="blog-detail-page">
    <blog :blog-data="currentBlog()" @like="like" :user-id="user.id" :from-blog-detail="true"></blog>
    <div id="comment">
    	</br>Comments : </br>
	    <comment v-for="(comment, index) in listComments()"
	    	:comment-data="comment" :key="comment.id" :blog-id="blogId"
	    	 @remove="removeComment (index)" @reload="loadBlog"> </comment>
	    <div id="comment-input" :class="{loginShow: checkUserLogin()}">
	    	<textarea v-model="message" :placeholder="user.name + ' comment here'" />
	    	<button @click="addComment()" >Comment</button>
	    </div>
    </div>
  </div>
</template>

<script>
  import blog from './common/Blog.vue'
  import comment from './common/Comment.vue'
  import common from '../js/common'

  export default {
    name: 'blog-detail-page',
    components: {
      blog,
      comment
    },
    data () {
      return {
        blogs: [],
        blogId: this.$route.params.id,
        user: common.validateUser (),
        message: ''
      }
    },
    methods: {
      currentBlog () {
        return this.blogs.filter (blog => blog.id === parseInt (this.blogId))[0]
      },
      listComments () {
        return this.currentBlog ().comments
      },
      checkUserLogin () {
        return this.user.id ? this.user : false
      },
      addComment () {
        let newComment = common.createComment (this.user, 'New Title', this.message)
        common.addCommentToBlog (newComment, this.blogId)
        this.loadBlog ()
      },
      loadBlog () {
        this.blogs = common.getBlogData ()
      },
      removeComment (index) {
        common.removeComment (this.blogId, index)
        this.loadBlog ()
      },
      like () {
      }
    },
    created: function () {
      this.loadBlog ()
    },
    watch: {
      blogs: function watchBlog () {
        common.getBlogData ()
      }
    }
  }
</script>
