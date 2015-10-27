'use strict';

angular.module('myApp', [
    'ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/events', {
            templateUrl: 'event/events.html',
            controller: 'EventController'
        });
        $routeProvider.when('/newEvent', {
            templateUrl: 'event/newEvent.html',
            controller: 'EventController'
        });
    }])
    .controller('EventController', ['$http', function($http) {
        var store = this;
        store.events = [];
        $http.get('event/events.json').success(function(data) {
            store.events = data;
        });
        this.event = {};
        this.eventTypes = eventTypes;
        console.log('Init EventController');
        this.predicate = 'age';
        this.reverse = true;
        this.order = function(predicate) {
            this.reverse = (this.predicate === predicate) ? !this.reverse : false;
            this.predicate = predicate;
            console.log('predicate = ' + this.predicate + '; reverse = ' + this.reverse);
        };

        this.addEvent = function() {
            console.log('Add Event :' + this.event);
            this.events.push(this.event)
        }
    }])
    .controller('ContactController', ['$http', function($http) {
        var store = this;
        store.contacts = [];
        $http.get('contact/contacts.json').success(function(data) {
            store.contacts = data;
        });
        this.contact = {};
        console.log('Init ContactController');
        this.predicate = 'title';
        this.reverse = true;
        this.order = function(predicate) {
            this.reverse = (this.predicate === predicate) ? !this.reverse : false;
            this.predicate = predicate;
            console.log('predicate = ' + this.predicate + '; reverse = ' + this.reverse);
        };

        this.addContact = function() {
            console.log('Add Contact :' + this.contact);
            this.contacts.push(this.contact)
        }
    }])
    .controller('LoginController', function() {
        console.log('Init LoginController');

        this.login = function () {
            console.log("Login click!!!");
            this.isLogin = true;
        };

        this.getLogin = function () {
            console.log("Login is " + this.isLogin);
            return !this.isLogin;
        };
    });

var isLogin = false;

var eventTypes = [
    'PHONE_TO',
    'TRY',
    'EMAIL_TO',
    'VISIT_TO',
    'SMS_TO',
    'PHONEMEETING',
    'MEETING',
    'SALE',
    'PHONE_FROM',
    'EMAIL_FROM',
    'VISIT_FROM',
    'SMS_FROM',
    'SKYPE',
    'MAIL_TO',
    'MAIL_FROM',
    'NULL',
    'CALENDAR_MEETING',
    'CREATE_PHONEMEETING',
    'CREATE_MEETING'
];