import { describe, test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import AppTodoInput from '../AppTodoInput.vue'

describe('AppTodoInput', () => {
  test('text', () => {
    const wrapper = mount(AppTodoInput, { props: { type: 'text' } })
    expect(wrapper.html()).toContain('type="text"')
  })
})
