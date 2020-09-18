Quintus.MetaGUI = function(Q) {
    Q.Sprite.extend("Meta", {
        init: function(p) {
            this._super(p, {
                asset: "meta2.png",
                x: 1050,
                y: 330,
                scale: 0.1,
                collisionMask: Q.SPRITE_JUGADORES,
            });
            this.add('2d');
            this.on("bump.left", function(colisionar) {
                if (colisionar.obj.isA("Jugador")) {
                    Q.stageScene("choque", 1, {
                        label: "ganaste"
                    });
                    //this.destroy();
                }
            })
        }
    })
}