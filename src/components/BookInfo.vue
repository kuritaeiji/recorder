<template>
  <div id="book-info" class="mb-3 p-2" @click="onClick">
    <b-row>
      <b-col md="4">
        <img :src="book.image">
      </b-col>
      <b-col md="8">
        <ul class="list-unstyled">
          <li>タイトル： {{ book.title }}</li>
          <li>価格： {{ book.price }}円</li>
          <li>著者： {{ book.author }}</li>
        </ul>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'book-info',
  props: {
    book: Object,
    linkable: {
      type: Boolean,
      default: false
    },
    index: Number
  },
  methods: {
    ...mapActions(['setCurrent']),
    onClick() {
      if (this.linkable) {
        this.setCurrent(this.book)
        this.$router.push('/form')
      }
    }
  }
}
</script>

<style scoped>
#book-info:hover {
  cursor: pointer;
  background-color: #ff9;
}
</style>