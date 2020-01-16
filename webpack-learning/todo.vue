<template>
  <div>
    <h1>{{title}}</h1>
    <ul>
      <li v-for="todo in todos">{{todo}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "vue",
      todos: ["学习", "游戏"]
    };
  }
};
</script>

<style scoped>
li {
  color: green;
}
</style>