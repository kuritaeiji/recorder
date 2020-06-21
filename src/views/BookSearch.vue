<template>
  <div id="book-search">
    <b-form inline @submit.prevent="onSubmit">
      <label for="keyword" class="mr-3">キーワード</label>
      <b-input id="keyword" v-model="keyword" class="mr-3"></b-input>
      <b-button type="submit" variant="primary">検索</b-button>
    </b-form>
    <hr />
    <div id="books" :items="books" :per-page="perPage" :current-page="currentPage">
      <BookInfo v-for="book in books" :key="book.id" :book="book" :linkable="true"></BookInfo>
    </div>
    <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" aria-controls="books" v-if="rows !== 0"></b-pagination>
  </div>
</template>

<script>
import BookInfo from '../components/BookInfo.vue'

export default {
  name: 'book-search',
  components: {
    BookInfo
  },
  data() {
    return {
      books: [],
      keyword: '',
      currentPage: 1,
      perPage: 3
    }
  },
  methods: {
    onSubmit() {
      this.axios.get(`https://www.googleapis.com/books/v1/volumes?q=${this.keyword}`)
                .then((response) => {
                  let searchedBooks = response.data.items
                  console.log(searchedBooks)
                  searchedBooks.forEach((book) => {
                    let authors = book.volumeInfo.authors
                    let price = book.saleInfo.listPrice
                    let image = book.volumeInfo.imageLinks

                    this.books.push({
                      id: book.id,
                      title: book.volumeInfo.title,
                      author: authors ? authors.join(',') : '',
                      price: price ? price.amount : '-',
                      image: image ? image.smallThumbnail : ''
                    })
                  })
                  console.log(this.books)
                })
    }
  },
  computed: {
    rows() {
      return this.books.length
    }
  }
}
</script>