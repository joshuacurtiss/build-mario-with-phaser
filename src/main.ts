import Phaser from 'phaser'

class Game extends Phaser.Scene {

    constructor () {
        super('Game');
    }

    preload() {
        this.load.image('tiles', './assets/tiles.png');
        this.load.tilemapTiledJSON('map', './assets/map.json');
        this.load.atlas('atlas', './assets/mario-atlas.png','./assets/mario-atlas.json');

        this.load.on('complete', () => {
            // generateAnimations(this);
        });
    }

    create() {
        const noCollisionTiles = [
            tiles.EMPTY,
            tiles.FLAG_LEFT
        ];

        this.map = this.make.tilemap({ key: 'map' });
        // this.tileset = this.map.addTilesetImage('map-tileset', 'tiles');
        // this.platform = this.map.createStaticLayer('platform', this.tileset, 0, 0);

        // this.map.createStaticLayer('background', this.tileset, 0, 0);
        // this.platform.setCollisionByExclusion(noCollisionTiles, true);

        // this.player = new Player(this, 25, 400).collideWith(this.platform);
        // this.goombas = new Goomba(this).collideWith(this.platform);
        // this.coins = new Coin(this).collideWith(this.player.sprite);
        // this.flag = new Flag(this);
        // this.debugger = new Debugger(this);

        // this.inputs = this.input.keyboard.createCursorKeys();
    }
    
    update() {
        // this.player.update(this.inputs);
        // this.goombas.update();
        // this.coins.update();
        // this.debugger.debuggerEnabled && this.debugger.update();
    }
}

export default Game;
