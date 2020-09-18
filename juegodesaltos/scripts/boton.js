Quintus.BotonGUI = function(Q) {
    Q.UI.Button.extend("BotonMusica", {
        init: function() {
            this._super({
                type: Q.SPRITE_BOTON,
                label: "On",
                align: "center",
                fill: "#E0FFFF",
                w: 40,
                h: 30,
                x: 545,
                y: 61
            });
            this.on("touch");
        },
        touch: function(touch) {
            Q.audio.play('musica1.mp3');
        },
    });
};