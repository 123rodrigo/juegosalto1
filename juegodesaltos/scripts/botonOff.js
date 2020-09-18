Quintus.BotonoffGUI = function(Q) {
    Q.UI.Button.extend("BotonMusicaOff", {
        init: function() {
            this._super({
                type: Q.SPRITE_BOTON,
                label: "Off",
                align: "center",
                fill: "#E0FFFF",
                w: 40,
                h: 30,
                x: 590,
                y: 61
            });
            this.on("touch");
        },
        touch: function(touch) {
            Q.audio.stop('musica1.mp3');
        },
    });
};