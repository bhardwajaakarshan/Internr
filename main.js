/**
 * Created by The Mamba on 1/17/2015.
 */
(function () {
    var app = angular.module('information', []);
    app.controller('ProjectController', function () {
        this.products = information;
    });

    app.controller('TabController', function () {
        this.tab = 1;

        this.setTab = function (tab) {
            this.tab = tab;
        };

        this.incrementTab = function(){
            this.setTab(this.tab+1);
        };

        this.getTab = function(){
            return  this.tab;
        };
    });

    var information = [
        {
            name: 'Spotify',
            description: 'Internship for Spotify.',
            image: 'http://tech.co/wp-content/uploads/2014/12/spotify.png',
            order: 1
        },
        {
            name: 'Facebook',
            description: 'Internship for Facebook.',
            image: 'https://www.facebook.com/images/fb_icon_325x325.png',
            order: 2
        }
    ]
})()