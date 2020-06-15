// 组件
export default {
  template: `
    <div>
        <h2>{{message}}</h2>
        <button @click="btnClick">按钮</button>
    </div>
    `,
  data() {
    return { message: "Hello" };
  },
  methods: {
    btnClick() {
      alert(1);
    },
  },
};
