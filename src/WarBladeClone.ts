
export class WarBladeClone {

    constructor() {
        this.game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.CANVAS, 'content', 
        { preload: this.preload, create: this.create, update: this.update });
    }

    scaleRatio: number = window.devicePixelRatio / 3;

    game: Phaser.Game;

    preload() {
        this.game.load.image('logo', 'assets/phaser.png');
    }

    create() {
        var logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
        logo.anchor.setTo(0.5, 0.5); 
    }

    update(){

    }

}