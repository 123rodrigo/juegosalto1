Quintus.JugadoresGUI = function(Q) {
    Q.tipoJugador = {
        jug2: {
            asset: "barra2.jpg",
        },
    };
    //Mi jugador
    Q.Sprite.extend("Jugador", {
        init: function(p) {
            this._super(p, {
                //type: Q.SPRITE_JUGADORES,
                //collisionMask: Q.SPRITE_BALON,
            });
            this.add("2d");
            this.on("bump.left", function(colisionar) {
                if (colisionar.obj.isA("balon")) {
                    Q.stageScene("choque", 1, {
                        label: "Intentalo de nuevo"
                    });
                    this.destroy();
                }
            })
        }
    })
}