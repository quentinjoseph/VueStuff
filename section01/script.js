console.log('hello');

new Vue({
  el: '#app',
  data: {
    title:'Hey Hey Hey!'
  },
  methods: {
    changeTitle:function(event) {
      this.title = event.target.value;
    }
  }
})