import { shallowMount, createLocalVue } from '@vue/test-utils'
import BookInfo from '../../src/components/BookInfo.vue'
import Vuex from 'vuex'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(BootstrapVue)
localVue.use(VueRouter)

const actions = {
  setCurrent: jest.fn()
}

const store = new Vuex.Store({
  state: {},
  actions
})

const router = new VueRouter()

describe('BookInfo.vue', () => {
  it('クリックする', () => {
    const wrapper = shallowMount(BookInfo, {
      propsData: {
        book: {
          id: 1,
          title: 'test',
          author: 'test',
          price: 1
        },
        linkable: true
      },
      localVue,
      store,
      router
    })
    wrapper.find('#book-info').trigger('click')
    expect(actions.setCurrent).toHaveBeenCalled()
    expect(wrapper.vm.$route.path).toBe('/form')
  })
})