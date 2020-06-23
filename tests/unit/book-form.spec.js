import { mount, createLocalVue } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import BookForm from '../../src/views/BookForm.vue'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(BootstrapVue)
localVue.use(Vuex)
localVue.component('ValidationProvider', ValidationProvider)
localVue.component('ValidationObserver', ValidationObserver)




describe('BookForm.vue', () => {
  let actions
  let getters
  let store

  beforeEach(() => {
    const book = {
      id: 1,
      title: 'test',
      author: 'test',
      price: 1,
      date: '2019-1-1',
      review: 'test'
    }
    
    getters = {
      current: () => {
        return book
      },
      getBookById: (id) => {
        return () => {
          console.log(id)
          return book
        }
      }
    }
    
    actions = {
      setReviewedBook: jest.fn(),
      setCurrent: jest.fn()
    }
    
    store = new Vuex.Store({
      actions,
      getters
    })
  })

  it('本の読了日、レビューが描画されている', () => {
    const wrapper = mount(BookForm, {
      localVue, store
    })
    expect(wrapper.vm.$data.form.date).toBe('2019-1-1')
    expect(wrapper.vm.$data.form.review).toBe('test')
  })

  it('レビューの登録', () => {
    const router = {
      push: jest.fn()
    }
    const toasted = {
      show: jest.fn()
    }
    const wrapper = mount(BookForm, {
      localVue, store, 
      mocks: {
        $router: router,
        $toasted: toasted
      }
    })
    wrapper.find('#date').setValue('2020-1-1')
    wrapper.find('#b-book-form').trigger('submit.prevent')
    expect(actions.setReviewedBook).toHaveBeenCalled()
    expect(actions.setCurrent).toHaveBeenCalled()
    expect(router.push).toHaveBeenCalled()
    expect(toasted.show).toHaveBeenCalled()
  })
})