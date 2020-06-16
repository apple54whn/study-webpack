<template>
  <div>
    <h2>{{ message }}</h2>
    <button @click="btnClick">按钮</button>
    <cpn />
  </div>
</template>

<script>
// 可省略后缀（需在 webpakc 中配置）
import Cpn from "./Cpn";

export default {
  name: "App",
  components: {
    Cpn,
  },
  data() {
    return { message: "Hello" };
  },
  methods: {
    btnClick() {
      alert(1);
    },
  },
};
</script>

<style></style>
