"use strict";

app.component("apiCaller", {
    templateUrl: "components/api-caller.html",
    controller: "ApiCallerController",
    bindings: {}
});


app.controller("ApiCallerController", function ($log, $http, RestService) {

    $log.debug("ApiCallerController()");

    this.$onInit = function () {
        $log.debug("ApiCallerController().onInit()");
        this.apiCall("http://localhost:8080/api/songs");
    }

    this.apiCall = function (url) {
        $log.debug("ApiCallerController().apiCall()")
        $log.debug("url:" + url)
        $http.get(url,
            {
                params: {
                    size: 10
                }
            })
            .then(response => {
                $log.debug(response.data)
                this.page = response.data.page
                this.links = response.data._links
                this.songs = response.data.songs
            })
    }
});