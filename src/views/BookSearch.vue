<template>
  <div id="book-search">
    <b-form inline v-on:submit="onSubmit">
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
  }
}
</script>