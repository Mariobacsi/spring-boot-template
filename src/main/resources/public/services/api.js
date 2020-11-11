"use strict";

app.service("ApiService", function ($http, $log) {

    this.laden = (pfad) => {

        return $http
            .get(pfad)
            .then(response => {
                $log.debug("RestService.seiteLaden() OK", response);
                return response.data;
            });
    };

    this.speichern = (song) => {

      return $http
          .put(song._links.self.href, song)
          .then(response => {
              return response;
          });
    };

    this.loeschen = (song) => {

        return $http
            .delete(song._links.self.href);

    }

});