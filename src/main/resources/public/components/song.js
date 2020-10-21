"use strict";

app.component("song", {
    templateUrl: "components/song.html",
    controller: "SongController",
    bindings: {
        song: '<',
        length: '<'
    }
});


app.controller("SongController", function ($log, RestService) {

    $log.debug("SongController()");

    this.$onInit = function () {
        this.editMode = false
    }

    this.delete = function () {
        $log.debug("SongController().delete()");
        RestService.loeschen(this.song)
        if (this.length == 1) {
        }
    }

    this.save = function () {
        this.song.title = this.title
        this.song.artist = this.artist
        this.song.genre = this.genre
        RestService.speichern(this.song)
        this.editMode = false
    }

    this.edit = function () {
        this.editMode = true
        this.title = this.song.title
        this.artist = this.song.artist
        this.genre = this.song.genre
    }

});
