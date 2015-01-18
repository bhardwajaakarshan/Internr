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
            name: 'John',
            description: 'Experienced Software Engineer',
            image: 'http://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Resume.pdf/page1-593px-Resume.pdf.jpg',
            order: 1
        },
        {
            name: 'Emily',
            description: 'Project Manager',
            image: 'http://careerservices.princeton.edu/sites/career/files/Sophomore-Resume.jpg',
            order: 2
        },
        {
            name: 'Jerry',
            description: 'Lawyer',
            image: 'http://musiced.nafme.org/files/2012/04/resume1.jpg',
            order: 3
        },
        {
            name: 'Dave',
            description: 'Producer in Hollywood, CA',
            image: 'http://www.bjornconsulting.com/wp-content/uploads/2010/04/2011-11-Resume-without-Attachment.jpg',
            order: 4
        },
        {
            name: 'Craig',
            description: 'Singer',
            image: 'http://craigbaute.com/wp-content/uploads/2010/06/CBaute-Resume-Pg.-2.jpg',
            order: 5
        },
        {
            name: 'Stephanie',
            description: 'Writer',
            image: 'http://jessicasuhr.com/wp-content/uploads/2012/01/Resume-3.jpg',
            order: 6
        }

    ];
})()