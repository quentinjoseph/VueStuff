// Put this in the script section in JSFiddle
// In a local setup, you need to merge this and the index.html file into one file

new Vue({
	el: '#app',
	data: {
    youMeter: 100,
    monsterMeter:100,
    damageToYou: [],
    damageToMonster:[],
  },
  methods: {
    fightDamage: function () {
      var you = this.youMeter;
      var monster = this.monsterMeter;

      if(you > 0 && monster > 0){
        this.damageToYou.unshift((Math.floor((Math.random() * 15) + 1)));
        this.damageToMonster.unshift((Math.floor((Math.random() * 10) + 1)));
        this.youMeter = you - this.damageToYou[0];
        this.monsterMeter = monster - this.damageToMonster[0];
        this.damageToMonster[0] = 'lost ' + this.damageToMonster[0];
        this.damageToYou[0] = 'lost ' + this.damageToYou[0];
      }
      this.checkForWinner();
    },
    specialAttack: function () {
      this.damage = true;
      var you = this.youMeter;
      var monster = this.monsterMeter;
      if(you > 0 && monster > 0){
        this.damageToYou.unshift((Math.floor((Math.random() * 10) + 4)));
        this.damageToMonster.unshift((Math.floor((Math.random() * 10) + 6)));
        this.youMeter = you - this.damageToYou[0];
        this.monsterMeter = monster - this.damageToMonster[0];
        this.damageToMonster[0] = 'lost ' + this.damageToMonster[0];
        this.damageToYou[0] = 'lost ' + this.damageToYou[0];
      }
      this.checkForWinner();
    },
    heal: function () {
      this.damage = false;
      var you = this.youMeter;
      var monster = this.monsterMeter;
      if (you > 0 && monster > 0 && you < 100 && monster < 100) {
        this.damageToYou.unshift((Math.floor((Math.random() * 5) + 1)));
        this.damageToMonster.unshift(1);
        this.youMeter = you + this.damageToYou[0];
        this.monsterMeter = monster + this.damageToMonster[0];
        this.damageToMonster[0] = 'gained ' + this.damageToMonster[0];
        this.damageToYou[0] = 'gained ' + this.damageToYou[0];
      }
    },
    giveUp: function () {
      this.youMeter = 100;
      this.monsterMeter = 100;
      this.damageToYou = [];
      this.damageToMonster = [];
      alert('you gave up!');
    },
    checkForWinner: function (){
      if ((this.youMeter < 0) && (this.youMeter < this.monsterMeter)) {
        alert('You Lost 😣');
      }
      if ((((this.youMeter > 0) && (this.monsterMeter < 0)) || ((this.youMeter > this.monsterMeter) && this.monsterMeter < 0))) {
        alert('You won! You TRULY are the slayer of monsters!!');
      }
    }
  }
})