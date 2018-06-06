console.log('hello');

new Vue({
  el: '#app',
  data: {
    value:0,

  },
  computed: {
    result:function(){
      return this.value < 37 ? this.value +' Not there yet. Keep going!' : this.value +' You Made It!';
    }
  },
  watch: {
    value: function(value){
      var q=this;
      setTimeout(function(){
        q.value = 0;
      },5000);
    }
  }
})