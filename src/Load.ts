/**
 * Load 
 * Load all assets here.
 */
export class Load extends Phaser.State {
    preload() {
        let preloadbar = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, "preloadbar");
        preloadbar.anchor.set(0.5, 0.5);
        this.load.setPreloadSprite(preloadbar);
        this.game.load.image('logo', 'assets/phaser.png');
    }

    create() {
        setTimeout(() => {
            this.game.state.start("menu");
        }, 500);
    }
}
