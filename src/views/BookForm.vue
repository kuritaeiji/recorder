<template>
  <div id="book-form">
    {{ book.title }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'book-form',
  computed: mapGetters(['current']),
  data() {
    return {
      book: {},
      form: {
        date: null,
        review: ''
      }
    }
  },
  mounted() {
    if (!this.current) {
      this.$router.push('/')
    }
    this.book = Object.assign({}, this.current)
  }
}
</script>