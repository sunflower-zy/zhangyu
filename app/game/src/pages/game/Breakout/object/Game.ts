import Scene from "./Scene";

export default class Game {
  ctx: CanvasRenderingContext2D;
  scenes: Array<Scene> = [];
  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
  }
  addScene(scene: Scene) {
    this.scenes.push(scene);
  }

  resize() {
    this.ctx.canvas.width = window.innerWidth;
    this.ctx.canvas.height = window.innerHeight;
  }

  checkGameOver() {
    return this.scenes.some((scene) => scene.checkGameover());
  }

  render(time: number) {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.scenes.forEach((scene) => {
      scene.render(time);
    });

    if (!this.checkGameOver()) {
      requestAnimationFrame((time) => {
        this.render(time);
      });
    }
  }
}
