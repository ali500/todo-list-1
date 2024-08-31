import { describe, test, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import AppButton from '../AppButton.vue'

import { AppColor } from '@/type'

describe('AppButton', () => {
  test('default slot', () => {
    const wrapper = mount(AppButton, { slots: { default: 'button_label' } })
    expect(wrapper.text()).toContain('button_label')
  })

  test('color', () => {
    const wrapper = mount(AppButton, { props: { color: AppColor.Indigo } })
    expect(wrapper.html()).toContain('indigo')
  })

  test('shape', () => {
    const wrapper = mount(AppButton, { props: { shape: 'circle' } })
    expect(wrapper.html()).toContain('rounded-full')
  })
})
