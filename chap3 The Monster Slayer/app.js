new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false
    },
    methods: {
        startGame: function () {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },
        attack: function () {
            this.monsterHealth -= this.calculateDamage(3, 10);
            if (this.checkWin()){
                return;
            }
            this.monsterAttack();
        },
        specialAttack: function () {
            this.monsterHealth -= this.calculateDamage(10, 20);
            if (this.checkWin()){
                return;
            }
            this.monsterAttack();
        },
        heal: function () {
            if (this.playerHealth <= 90 ){
                this.playerHealth += 10;
            } else {
                this.playerHealth = 100;
            }
        },
        giveUp: function () {
            this.gameIsRunning = false;
        },
        calculateDamage: function (min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        _showPopupNewGame: function(message){
            if (confirm(message)) {
                this.startGame();
            } else {
                this.gameIsRunning = false;
            }
        },
        monsterAttack : function () {
            this.playerHealth -= this.calculateDamage(5, 12);
            this.checkWin();
        },
        checkWin: function () {
            var message;
            if (this.monsterHealth <= 0) {
                message = 'You won ! New Game ?';
                this._showPopupNewGame(message);
                return true;
            } else if (this.playerHealth <= 0) {
                message = 'You lost ! New Game ?';
                this._showPopupNewGame(message);
                return true;
            }
            return false;
        }
    }
});