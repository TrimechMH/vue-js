/**
 * Created by med-habib.trimech on 6/20/2017.
 */
new Vue({
    el: '#app',
    data: {
        title: 'Hello World!',
        link: 'http://google.com',
        finishedLink: '<a href="http://google.com"> Google</a>'
    },
    methods: {
        changeTitle: function (event) {
            this.title = event.target.value;
        },
        sayHello: function () {
            this.title = 'Hello!';
            return this.title;
        }
    }
});

new Vue({
    el: '#app1',
    data: {
        counter: 0,
        counterDI: 0,
        secondCounter: 0,
        x: 0,
        y: 0
    },
    computed: {
        output: function () {
            console.log('computed');
            return this.counterDI > 5 ? 'Greater than5' : 'Smaller than 5'
        }
    },
    watch: {
        counterDI: function (value) {
            var vm = this;
            setTimeout(function(){
                vm.counterDI = 0;
            },2000)
        }
    },
    methods: {
        increase: function (step) {
            this.counter += step;
        },
        updateCoordinate: function (event) {
            this.x = event.clientX;
            this.y = event.clientY;
        },
        dummy: function (event) {
            event.stopPropagation();
        },
        alertMe: function () {
            alert('alert! you press enter || space ||F2  ...');
        },
        result: function () {
            console.log('result');
            return this.counterDI > 5 ? 'Greater than5' : 'Smaller than 5'
        }
    }
});

new Vue({
    el: '#app2',
    data: {
        name: 'Max',
        link: 'http://www.google.com',
        attachRed : false,
        color : 'green'
    },
    computed : {
      divClasses : function () {
          return {
              red : this.attachRed,
              blue : !this.attachRed
          }
      }
    },
    methods: {
        changeLink: function () {
            this.link = 'http://www.apple.com'
        }
    }
});

//define new keyCodes
Vue.config.keyCodes.f2 = 113;