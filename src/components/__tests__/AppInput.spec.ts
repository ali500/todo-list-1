import { describe, test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import AppInput from '../AppInput.vue'

describe('AppInput', () => {
  test('text', () => {
    const wrapper = mount(AppInput, { props: { type: 'text' } })
    expect(wrapper.html()).toContain('type="text"')
  })
})
