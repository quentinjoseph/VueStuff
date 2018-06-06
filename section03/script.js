console.log('hello');

new Vue({
  el: '#app',
  data: {
    title:'Hey Hey Hey! Vue is on the way!',
    link:'http://google.com',
    fullLink: '<a href="http://google.com">googs</a>'

  },
  methods: {
    sayHello:function() {
      return this.title;
    }
  }
})