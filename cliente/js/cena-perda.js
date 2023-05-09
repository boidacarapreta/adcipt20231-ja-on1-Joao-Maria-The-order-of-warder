export default class final_feliz extends Phaser.Scene {
  constructor() {
    super("perda");
  }

  preload() {
    this.load.image("perdeu", "./assets/perdeu.png");
  }

  create() {
    this.imagem = this.add
      .image(400, 225, "perdeu")
      .setTint(0xffff00)
      .setInteractive()
      .on("pointerdown", () => {
        this.imagem.destroy();
        this.texto.destroy();
        this.game.scene.start("abertura");
      });

    this.texto = this.add.text(490, 50, "perda", {
      fill: "#000000",
    });
  }

  upload() {}
}