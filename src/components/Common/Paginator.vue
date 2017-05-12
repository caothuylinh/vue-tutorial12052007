<template>
  <div>
    <label v-for="(page, index) in totalPage()" @click="changePage(index)">{{index + 1}}</label>
  </div>
</template>

<script>
  export default {
    name: 'mainBtn',
    props: {
      total: {
        type: Number
      },
      limits: {
        type: Number
      },
      current: {
        type: Number
      }
    },
    methods: {
      totalPage () {
        if (this.total % this.limits !== 0) {
          return Math.floor (this.total / this.limits) + 1
        } else {
          return this.total / this.limits
        }
      },
      changePage (index) {
        this.$emit ('changePage', index + 1)
      }
    }
  }
</script>
