console.log('hello');

new Vue({
  el: '#app',
  data: {
    name:'Quentin Joseph',
    age: 73,
    link:'https://wallpaperbrowse.com/media/images/POTD_chick_3597497k.jpg',
    fullLink: '<a href="http://google.com">googs</a>'

  },
  methods: {
    random:function() {
      //return this.title;
      return Math.random();
    }
  }
})