Quintus.JugadorcGUI = function(Q) {
    Q.Sprite.extend("Jugadorc", {
        init: function(p) {
            this._super(p, {
                asset: "jugadorp.jpg",
                x: 80,
                y: 340,
                collisionMask: Q.SPRITE_JUGADORES,
            });
            this.add('2d, platformerControls,animation');
            this.on('jump');
            this.on('jumped');
            this.on("bump.right", function(colisionar) {
                if (colisionar.obj.isA("Jugador")) {
                    Q.audio.play('musica3.mp3');
                    Q.stageScene("choque", 1, {
                        label: "Intentalo de nuevo"
                    });
                    //this.destroy();
                }
            })
        },
        step: function(dt) {
            if (Q.inputs['left'] && this.p.direction == 'right') {
                this.p.flip = 'x';
            }
            if (Q.inputs['right'] && this.p.direction == 'left') {
                this.p.flip = false;
            }
        }
    })
}