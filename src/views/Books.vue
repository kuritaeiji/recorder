<template>
  <div id="books">
    <BookInfo v-for="book in books" :key="book.id" :book="book" :linkable="true"></BookInfo>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import BookInfo from '../components/BookInfo.vue'

export default {
  name: 'books',
  data() {
    return {
      books: []
    }
  },
  components: {
    BookInfo
  },
  computed: mapGetters(['getBooks']),
  created() {
    this.books = this.getBooks
  }
}
</script>