import storage from './storage'

export default {
  createComment (user, title, detail) {
    let newComment = { id: this.createUniqueID (), title: title, detail: detail, user_id: user.id, user_name: user.name, like: [] }
    return newComment
  },
  createLike (userId) {
    let like = { user_id: userId }
    return like
  },
  validateUser () {
    return storage.methods.fetchUser ().id ? storage.methods.fetchUser () : false
  },
  addCommentToBlog (comment, blogId) {
    let blogData = storage.methods.fetchData ()
    blogData.filter (blog => blog.id === parseInt (blogId))[0].comments.push (comment)
    storage.methods.saveData (blogData)
  },
  removeComment (blogId, commentIndex) {
    let blogData = storage.methods.fetchData ()
    let blog = blogData.filter (blog => blog.id === parseInt (blogId))[0]
    blog.comments.splice (commentIndex, 1)
    storage.methods.saveData (blogData)
  },
  likeBlog (blogId, userId) {
    let blogData = storage.methods.fetchData ()
    let blog = blogData.filter (blog => blog.id === parseInt (blogId))[0]
    let like = this.createLike (userId)
    blog.like.push (like)
    storage.methods.saveData (blogData)
  },
  likeComment (blogId, commentId, userId) {
    let blogData = storage.methods.fetchData ()
    let blog = blogData.filter (blog => blog.id === parseInt (blogId))[0]
    let comment = blog.comments.filter (comment => comment.id === parseInt (commentId))[0]
    let like = this.createLike (userId)
    comment.like.push (like)
    storage.methods.saveData (blogData)
  },
  createUniqueID () {
    let day = new Date ()
    return day.getTime ()
  },
  getBlogData () {
    return storage.methods.fetchData ()
  }
}
