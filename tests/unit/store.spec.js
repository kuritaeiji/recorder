import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import store from '@/store/index.js'
import createPersistedState from 'vuex-persistedstate'

const localVue = createLocalVue()
localVue.use(Vuex)

const books = [
  {
    id: 1,
    title: 'test',
    author: 'test',
    price: 1,
    date: '2019-1-1',
    review: 'test'
  },
  {
    id: 1,
    title: 'test',
    author: 'test',
    price: 1,
    date: '2011-2-2',
    review: 'test2'
  }
]

describe('store/index.js', () => {
  let testStore
  beforeEach(() => {
    testStore = store
  })

  it('dispatch setCurrent', () => {
    testStore.dispatch('setCurrent', books[0])
    expect(testStore.state.current).toEqual(books[0])
  })

  it('dispatch setReviewedBook to create book', () => {
    testStore.dispatch('setReviewedBook', books[0])
    expect(testStore.state.books[0]).toEqual(books[0])
  })

  it('dispatch setReviewedBook to update book', () => {
    testStore.dispatch('setReviewedBook', books[0])
    expect(testStore.state.books[0]).toEqual(books[0])

    testStore.dispatch('setReviewedBook', books[1])
    expect(testStore.state.books[0]).toEqual(books[1])
  })
})