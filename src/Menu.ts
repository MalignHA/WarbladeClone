/**
 * Menu 
 */
export class Menu extends Phaser.State {
    preload() {
        var logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
        logo.anchor.setTo(0.5, 0.5);

    }

    create() {
    }

    update() {

    }
}
