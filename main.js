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
        },
        {
            name: 'Google',
            description: 'Internship for Google.',
            image: 'http://www.newssetup.com/wp-content/uploads/2014/10/Google-Logo-3.jpg',
            order: 3
        },
        {
            name: 'Verizon',
            description: 'Internship for Verizon.',
            image: 'http://allthingsd.com/files/2011/07/Verizon-logo-big.png',
            order: 4
        },
        {
            name: 'Comcast',
            description: 'Internship for Comcast.',
            image: 'http://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Comcast_Logo.svg/2000px-Comcast_Logo.svg.png',
            order: 5
        },
        {
            name: 'SnapChat',
            description: 'Internship for SnapChat.',
            image: 'http://techhive.de/blog/wp-content/uploads/2014/11/snapchat-logo-png.png',
            order: 6
        }

    ];
})()