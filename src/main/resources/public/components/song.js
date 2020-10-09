"use strict";

app.component("song", {
    templateUrl: "components/song.html",
    controller: "SongController",
    transclude: true,
    bindings: {
        song: '<'
    }
});


app.controller("SongController", function ($log) {

    $log.debug("SongController()");

});
