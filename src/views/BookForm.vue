<template>
  <div id="book-form">
    <BookInfo :book="book"></BookInfo>
    <hr />
    <b-form @submit.prevent="onSubmit">
      <b-row class="mb-3">
        <b-col sm="3">
          <label for="date">読了日</label>
        </b-col>
        <b-col sm="3">
          <b-form-input type="date" id="date" v-model="form.date"></b-form-input>
        </b-col>
      </b-row>
      <b-row class="mb-3">
        <b-col sm="3">
          <label for="review">レビュー</label>
        </b-col>
        <b-col sm="6">
          <b-form-textarea rows="4" id="review" v-model="form.review"></b-form-textarea>
        </b-col>
      </b-row>
      <b-button block type="submit" variant="primary" big class="mb-3">登録</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import BookInfo from '../components/BookInfo.vue'

export default {
  name: 'book-form',
  computed: mapGetters(['current', 'getBookById']),
  data() {
    return {
      book: {},
      form: {
        date: null,
        review: ''
      }
    }
  },
  components: {
    BookInfo
  },
  created() {
    if (!this.current) {
      this.$router.push('/')
    }
    this.book = Object.assign({}, this.current)
  },
  mounted() {
    let b = this.getBookById(this.book.id)
    if (b) {
      this.form.date = b.date
      this.form.review = b.review
    }
  },
  methods: {
    ...mapActions(['setReviewedBook', 'setCurrent']),
    onSubmit() {
      let reviewedBook = Object.assign(this.book, this.form)
      console.log(reviewedBook)
      this.setReviewedBook(reviewedBook)
      this.setCurrent(null)
    }
  }
}
</script>