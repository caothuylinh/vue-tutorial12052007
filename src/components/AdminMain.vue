<template>
    <div class="admin-page">
      <h1>Welcome to Admin</h1>
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
  export default {
    name: 'admin-page',
    data () {
      return {
        tags: [{ label: 'Manage Blog', route: `admin/blogs` }, { label: 'Manage User', route: `admin/users` }]
      }
    }
  }
</script>
