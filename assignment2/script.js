console.log('hello');

new Vue({
  el: '#app',
  data: {
    inputValue: '',
    inputValue2:''

  },
  methods: {
    beepBoop:function() {
      //return this.title;
     alert('beep boop');
    },
    getValue: function(event){
      this.inputValue = event.target.value;
    },
    getValue2: function(event){
      this.inputValue2 = event.target.value;
    }
  }
})