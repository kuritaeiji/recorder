<template>
  <div id="book-search">
    <b-form inline v-on:submit.prevent="onSubmit">
      <label for="keyword" class="mr-3">キーワード</label>
      <b-input id="keyword" v-model="keyword" class="mr-3"></b-input>
      <b-button type="submit" variant="primary">検索</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'book-search',
  data() {
    return {
      books: [],
      keyword: ''
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
  }
}
</script>