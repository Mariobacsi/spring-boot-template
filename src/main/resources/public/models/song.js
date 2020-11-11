"use strict";

app.factory("Song", function () {

    function Song(template, modifier) {

        // Properties und ihre Defaultwerte
        let properties = {};

        Object.assign(this, properties, template, modifier);

        Object.keys(properties).forEach(k => Object.defineProperty(this, k, {writable: false}));

        // Liefert eine neue Instanz dieses Objekts mit den angegebenen Änderungen
        this.variante = modifier => new Song(this, modifier);
    }

    // Relativer Pfad im REST-API, unter dem diese Entities zu finden sind
    Song.path = "songs";

    return Song;
});
