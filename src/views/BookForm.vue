<template>
  <div id="book-form">
    <BookInfo :book="book"></BookInfo>
    <hr />
    <b-form>
      <b-row class="mb-3">
        <b-col sm="3">
          <label for="date">読了日</label>
        </b-col>
        <b-col sm="3">
          <b-form-input type="date" id="date" v-model="form.date"></b-form-input>
        </b-col>
      </b-row>
      <b-row>
        <b-col sm="3">
          <label for="review">レビュー</label>
        </b-col>
        <b-col sm="6">
          <b-form-textarea rows="4" id="review" v-model="form.review"></b-form-textarea>
        </b-col>
      </b-row>
    </b-form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import BookInfo from '../components/BookInfo.vue'

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
  components: {
    BookInfo
  },
  mounted() {
    if (!this.current) {
      this.$router.push('/')
    }
    this.book = Object.assign({}, this.current)
  }
}
</script>