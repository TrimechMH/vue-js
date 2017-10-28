/**
 * Created by med-habib.trimech on 6/20/2017.
 */
new Vue({
    el: '#app',
    data: {
        title: 'Hello World!',
        link : 'http://google.com',
        finishedLink : '<a href="http://google.com"> Google</a>'
    },
    methods: {
        changeTitle: function(event) {
            this.title = event.target.value;
        },
        sayHello : function () {
            this.title = 'Hello!';
            return this.title;
        }
    }
});

new Vue({
    el: '#app1',
    data: {
       counter : 0,
        x :0,
        y : 0
    },
    methods: {
        increase: function(step) {
            this.counter += step;
        },
        updateCoordinate : function (event) {
            this.x = event.clientX;
            this.y = event.clientY;
        },
        dummy: function (event) {
            event.stopPropagation();
        },
        alertMe : function () {
            alert('alert! you press enter || space ||F2  ...');
        }
    }
});

//define new keyCodes
Vue.config.keyCodes.f2 = 113;