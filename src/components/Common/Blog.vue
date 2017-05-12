<template>
  <div id="blog">
	<div>
	  {{blogData.title}}
	</div>  
	<div>
	  {{blogData.detail}}
	</div>
	<div>
	  Like : {{like}}
	</div>
	<div>
		<button v-if="isLikeButtonVisible()" @click="likeBlog()">Like this blog</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'blog',
    props: {
      blogData: {
        type: Object
      },
      userId: {
        type: Number
      },
      fromBlogDetail: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        like: this.blogData.like.length
      }
    },
    methods: {
      likeBlog () {
        console.log ('like : ' + this.checkLiked ().user_id)
        console.log ('like length : ' + this.blogData.like.length)
      },
      checkLiked () {
        return this.blogData.like.filter (likeObj => parseInt (likeObj.user_id) === parseInt (this.userId))[0]
      },
      checkUserLogin () {
        return this.userId
      },
      isLikeButtonVisible () {
        return this.fromBlogDetail && !this.checkLiked () && this.checkUserLogin ()
      }
    }
  }
</script>
