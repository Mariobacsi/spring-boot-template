"use strict";

app.component("song", {
    templateUrl: "components/song.html",
    controller: "SongController",
    bindings: {
        song: "<",
        geloescht: "&"
    }
});


app.controller("SongController", function ($log, ApiService) {

    $log.debug("SongController()");

    this.loeschen = () => {
        $log.debug("SongController.loeschen()", this.song);

        ApiService.loeschen(this.song)
            .then(() => {
                $log.debug("SongController.loeschen() OK");

                this.geloescht({ song: this.song });
            });
    };
});
