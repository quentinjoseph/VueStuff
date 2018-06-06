console.log('hello');

new Vue({
  el: '#app',
  data: {
    title:'Hey Hey Hey! Vue is on the way!',
    link:'http://google.com',
    counter: 0,
    x: 0,
    y:0
  },
  methods: {
    goUp:function(step, event){
      this.counter += step ;
      console.log(event);
    },
    updateCoordinates: function(event){
      this.x = event.clientX;
      this.y = event.clientY;
    },
    alertMe:function(){
      alert('bloop bloop');
    }
  }
})