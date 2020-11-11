"use strict";

app.component("songEditor", {
    templateUrl: "components/song-editor.html",
    controller: "SongEditorController",
    bindings: {}
});


app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state({
        name: "song-editor",
        params: { song: null },
        component: "songEditor"
    });
});


app.controller("SongEditorController", function ($state, $stateParams, $log, Song, ApiService) {

    $log.debug("SongEditorController()");

    this.song = new Song($stateParams.song);

    this.speichern = () => {
        $log.debug("SongEditorController.speichern()", this.song);

        ApiService
            .speichern(this.song)
            .then(song => {
                $log.debug("SongEditorController.speichern() OK", song);

                $state.go("liste");
            });
    };


});
