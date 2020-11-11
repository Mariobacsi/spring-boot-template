"use strict";

app.component("liste", {
    templateUrl: "components/liste.html",
    controller: "ListeController"
});

app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state({
        name: "liste",
        url: "/",
        component: "liste"
    });

    $urlRouterProvider.otherwise("/");
});

app.controller("ListeController", function($log, ApiService, Song) {

    let page = "http://localhost:8080/api/songs";

    this.laden = (page) => {

        ApiService.laden(page)
            .then(response => {
               this.songs = response._embedded.songs.map(song => {
                   return new Song(song);
               });
               this.links  = response._links;
               this.page  = response.page;
            });
    };

    this.laden(page);
});
