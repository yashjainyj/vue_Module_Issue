<template>
  <select id="state-select" class="rounded-md bg-green-200 text-white" name="state">
    <option
      v-for="(state, index) in states"
      :selected="isSelected(state)"
      :key="index"
    >
      {{ state }}
    </option>
  </select>
</template>

<script>
export default {
  props: ["todo", "index"],
  data() {
    return {
      name: "",
      state: "",
      states: ["Pending", "In Progress", "Done"],
    };
  },
  created() {
    if(!this.todo) return true;

    this.state = this.todo.state;
    this.name = this.todo.name;
  },
  methods: {
    isSelected(equivalent){
      return equivalent === this.state;
    }
  }
};
</script>

<style scoped></style>