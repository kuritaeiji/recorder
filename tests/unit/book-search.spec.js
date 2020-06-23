import { mount, createLocalVue } from '@vue/test-utils'
import BookSearch from '../../src/views/BookSearch.vue'
import flushPromises from 'flush-promises'

import BootstrapVue from 'bootstrap-vue'

import axios from 'axios'
import VueAxios from 'vue-axios'

const localVue = createLocalVue()
localVue.use(VueAxios, axios)
localVue.use(BootstrapVue)

jest.mock('axios')


describe('BookSearch.vue', () => {
  it('axiosで本を検索できる', async () => {
    const wrapper = mount(BookSearch, {
      localVue
    })
    wrapper.find('#search-books-form').trigger('submit.prevent')
    await flushPromises()
    expect(wrapper.vm.books[0].id).toBe(1)
  })
})