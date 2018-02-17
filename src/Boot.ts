/**
 * Boot
 */
export class Boot extends Phaser.State {
    preload() {
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.pageAlignHorizontally = true;
        this.game.scale.pageAlignVertically = true;

        this.game.state.start("load");
    }
}