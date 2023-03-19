import Input from "./Input";
import Node from "./Node";
export default class Paddle extends Node {
  width = 75;
  height = 10;
  left = 0;
  speed = 5;

  constructor(ctx: CanvasRenderingContext2D) {
    super(ctx);
    this.left = (this.ctx.canvas.width - this.width) / 2;
  }

  update(time: number) {
    if (Input.isPressed("ArrowLeft") && this.left > 0) {
      this.left = this.left -= this.speed;
    }
    if (
      Input.isPressed("ArrowRight") &&
      this.left < this.ctx.canvas.width - this.width
    ) {
      this.left = this.left += this.speed;
    }
  }

  draw(time: number) {
    this.ctx.beginPath();
    this.ctx.rect(
      this.left,
      this.ctx.canvas.height - this.height,
      this.width,
      this.height
    );
    this.ctx.fillStyle = "0095DD";
    this.ctx.fill();
    this.ctx.closePath();
  }
}
