import { mount, createLocalVue } from '@vue/test-utils'
import Books from '@/views/Books.vue'
import Vuex from 'vuex'
import BootstrapVue from 'bootstrap-vue'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(BootstrapVue)
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
    id: 2,
    title: 'test',
    author: 'test',
    price: 1,
    date: '2019-1-1',
    review: 'test'
  }
]

describe('Books.vue', () => {
  let store
  beforeEach(() => {
    store = new Vuex.Store({
      getters: {
        getBooks() {
          return books
        }
      }
    })
  })

  it('vuexからgetした本の表示', () => {
    const wrapper = mount(Books, {
      localVue, store
    })
    console.log(wrapper.html())
    const booksData = wrapper.vm.$data.books
    expect(booksData).toBe(books)
  })
})