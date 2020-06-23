<template>
  <div id="book-form">
    <BookInfo :book="book"></BookInfo>
    <hr />
    <ValidationObserver ref="observer">
      <b-form @submit.prevent="onSubmit" id="b-book-form">
        <ValidationProvider rules="pastDate" v-slot="{ errors }" name="読了日">
          <b-row class="mb-3">
            <b-col sm="3">
              <label for="date">読了日</label>
            </b-col>
            <b-col sm="3">
              <b-form-input type="date" id="date" v-model="form.date"></b-form-input>
            </b-col>
          </b-row>
          {{ errors[0] }}
          <b-row>
            <b-col sm="3"></b-col>
            <b-col class="text-left">{{ errors[0] }}</b-col>
          </b-row>
        </ValidationProvider>
        <ValidationProvider rules="required" v-slot="{ errors }" name="レビュー">
          <b-row class="mb-3">
            <b-col sm="3">
              <label for="review">レビュー</label>
            </b-col>
            <b-col sm="6">
              <b-form-textarea rows="4" id="review" v-model="form.review"></b-form-textarea>
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="3"></b-col>
            <b-col class="text-left">{{ errors[0] }}</b-col>
          </b-row>
        </ValidationProvider>
        <b-button block type="submit" variant="primary" big class="mb-3">登録</b-button>
      </b-form>
    </ValidationObserver>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import BookInfo from '../components/BookInfo.vue'
import { extend } from 'vee-validate'

extend('pastDate', {
  validate(value) {
    return new Date(value).getTime() <= new Date().getTime()
  },
  message: '未来の日付を入力しないでください'
})

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
    async onSubmit() {
      let valid = await this.$refs.observer.validate()
      if (valid) {
        let reviewedBook = Object.assign(this.book, this.form)
        this.setReviewedBook(reviewedBook)
        this.setCurrent(null)
        this.$router.push('/')
        this.$toasted.show("登録しました", { 
          theme: "bubble", 
          position: "top-right", 
          duration : 5000
        })
      } else {
        this.$toasted.show("正しい入力をしてください", { 
          theme: "bubble", 
          position: "top-right", 
          duration : 5000
        })
      }
    }
  }
}
</script>