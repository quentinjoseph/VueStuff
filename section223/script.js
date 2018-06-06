console.log('hello');

new Vue({
  el: '#app',
  data: {
    title:'Hey Hey Hey! Vue is on the way!',
    link:'http://google.com',
    counter: 0,
    x: 0,
    y:0,
  },
  computed: {
    output: function(){
      return this.counter > 5 ? 'Greater than 5' : 'Smaller than 5';
    }
  },
  watch: {
    counter: function (value){
      var this1 = this;
      setTimeout(function(){
        this1.counter = 0;
      },2000);
      //this.counter = 0;
    }
  }
})