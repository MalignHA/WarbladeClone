/**
 * Load 
 */
export class Load extends Phaser.State {
    preload() {
        this.game.load.image('logo', 'assets/phaser.png');
    }

    create() {
        var logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
        logo.anchor.setTo(0.5, 0.5);
    }
}
