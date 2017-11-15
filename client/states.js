angular.module('app').config(function ($stateProvider) {
    'use strict';
    $stateProvider.state('app', {
        abstract: true,
        controller: 'app',
        templateProvider: function (app) {
            return app.templateProvider('app');
        }
    }).state('app.menu', {
        views: {
            app: {
                controller: 'app_menu',
                templateProvider: function (app) {
                    return app.templateProvider('app.menu');
                }
            }
        }
    }).state('app.multiselect', {
        views: {
            app: {
                controller: 'app_multiselect',
                templateProvider: function (app) {
                    return app.templateProvider('app.multiselect');
                }
            }
        }
    }).state('app.result', {
        views: {
            app: {
                controller: 'app_result',
                templateProvider: function (app) {
                    return app.templateProvider('app.result');
                }
            }
        }
    }).state('app.details', {
        views: {
            app: {
                controller: 'app_details',
                templateProvider: function (app) {
                    return app.templateProvider('app.details');
                }
            }
        }
    });
});