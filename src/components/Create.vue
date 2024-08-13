<template>
  <form @submit.prevent="createTodo" class="flex gap-2 w-full">
    <input
      class="flex-1 shadow rounded-md p-2 focus:ring-2 focus:ring-blue-900 focus:outline-none"
      type="text"
      placeholder="Todo Name"
      name="name"
      required
    />
    <State ref="state-component" />
    <button type="submit" class="rounded-md shadow text-white bg-blue-700 py-2 px-6">Create</button>
  </form>
</template>

<script>
import State from '@/components/State.vue'

export default {
  components: { State },
  emits: ['create'],
  methods: {
    createTodo(event) {
      const elems = event.target.elements
      const todo = { name: elems.name.value, state: elems.state.value }
      this.$emit('create', todo)

      elems.name.value = ''
      elems.state.value = 'Pending'
    },
  },
}
</script>

<style scoped></style>
