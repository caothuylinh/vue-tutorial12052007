<template>
    <div>
      <ul>
        <li class="item" v-for="tag in tags">
          <router-link class="navigate-right" :to="'/' + tag.route">
            {{tag.label}}
          </router-link>
        </li>
      </ul>
    </div>
</template>

<script>
  import common from '../../js/common'
  
  export default {
    created () {
      this.setTitle ()
    },
    data () {
      return {
        tags: [{ label: 'Home', route: this.adminRoute () }, { label: this.loginTag (), route: `login` }],
        pageTitle: null
      }
    },
    methods: {
      setTitle () {
        if (typeof this.$route.name === 'string') {
          this.pageTitle = this.$route.name
        } else {
          this.pageTitle = null
        }
      },
      loginTag () {
        console.log ('user : ' + common.validateUser ().id)
        return common.validateUser () ? '(' + common.validateUser ().name + ') Signout' : 'Login'
      },
      adminRoute () {
        return common.validateUser ().isAdmin === 1 ? 'admin' : ''
      },
      reloadMenu () {
        this.tags[1].label = this.loginTag ()
      }
    },
    watch: {
      $route: function watchRoute () {
        console.log ('watch')
        this.reloadMenu ()
      }
    }
  }
</script>
