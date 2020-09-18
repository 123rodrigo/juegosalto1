Quintus.GamePlayGUI = function(Q) {
    Q.Sprite.extend("level1", {
        init: function(p) {
            this._super(p, {
                asset: "principal3.png",
                type: Q.SPRITE_CANCHA,
                x: 960 / 2,
                y: 720 / 2,
                w: 960,
                h: 720
            });
            this.on("inserted");
        },
        inserted: function() {
            this.musica = new Q.UI.Text({
                x: 570,
                y: 21,
                label: "Musica"
            });
            this.stage.insert(this.musica);
        }
    });
}