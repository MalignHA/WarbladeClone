import { Boot } from "./Boot";
import { Load } from "./Load";
import { Menu } from "./Menu";
import { Game } from "./Game";

export class WarBladeClone extends Phaser.Game {


    scaleRatio: number = window.devicePixelRatio / 3;

    constructor() {
        super("100", "100", Phaser.AUTO, 'content');

        this.state.add("boot", Boot);
        this.state.add("load", Load);
        this.state.add("menu", Menu);
        this.state.add("game", Game);

        this.state.start("boot");
    }


}
