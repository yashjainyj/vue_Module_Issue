import { mount } from '@vue/test-utils'
import Create from '@/components/Create.vue'

describe('it tests Create component', () => {
  test('it emits create event and resets the form when form is valid and create button is clicked', async () => {
    const expectedNameValue = 'TODO_NAME'
    const expectedStateValue = 'Pending'

    const wrapper = mount(Create)

    await wrapper.find(`input`).setValue(expectedNameValue)
    await wrapper.findComponent({ ref: 'state-component' }).setValue(expectedStateValue)

    await wrapper.find(`form`).trigger('submit')

    expect(wrapper.emitted().create).toBeTruthy()
    expect(wrapper.emitted().create[0][0]).toMatchObject({ name: expectedNameValue, state: 'Pending' })
    expect(wrapper.find(`input[name='name']`).element.value).toEqual('')
    expect(wrapper.find(`select[name='state']`).element.value).toEqual('Pending')
  })
})
