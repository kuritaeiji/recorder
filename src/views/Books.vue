<template>
  <div id="books">
    <div id="books" :items="getBooks" :per-page="perPage" :current-page="currentPage">
      <BookInfo v-for="(book, index) in books" :key="book.id" :book="book" :linkable="true" :index="index"></BookInfo>
    </div>
    <b-pagination aria-controls="books" :total-rows="rows" :per-page="perPage" v-model="currentPage"></b-pagination>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import BookInfo from '../components/BookInfo.vue'

export default {
  name: 'books',
  data() {
    return {
      books: [],
      perPage: 3,
      currentPage: 1
    }
  },
  components: {
    BookInfo
  },
  computed: { 
    ...mapGetters(['getBooks']),
    rows() {
      return this.books.length
    }
  },
  created() {
    this.books = this.getBooks
  }
}
</script>