<template>
  <div id="comment">
	<div>
	  {{commentData.title}}
	</div>
	<div>
	  {{commentData.detail}}
	</div>
	<div>
	  User : {{commentData.user_name}} <button v-if="checkUserOwner()" @click="remove">Remove Comment</button>
	</div>
	<div>
	  Like : {{commentData.like.length}} <button v-if="isLikeButtonInvisible()" @click="likeComment">Like Comment</button>
	</div>
  </div>
</template>

<script>
  import common from '../../js/common'

  export default {
    name: 'comment',
    props: {
      commentData: {
        type: Object
      },
      index: {
        type: Number
      },
      blogId: {
        type: String
      }
    },
    data () {
      return {
        user: common.validateUser ()
      }
    },
    methods: {
      remove (index) {
        this.$emit ('remove')
      },
      checkUserOwner () {
        console.log ('user : ' + this.user.id)
        console.log ('commentData : ' + this.commentData.user_id)
        return parseInt (this.user.id) === parseInt (this.commentData.user_id) ? this.user : false
      },
      checkUserLiked () {
        return this.commentData.like.filter (likeObj => parseInt (likeObj.user_id) === parseInt (this.user.id))[0]
      },
      isLikeButtonInvisible () {
        return !this.checkUserLiked () && this.user
      },
      likeComment () {
        common.likeComment (this.blogId, this.commentData.id, this.user.id)
        this.$emit ('reload')
      }
    }
  }
</script>
