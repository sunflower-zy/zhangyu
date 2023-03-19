import Node from "./Node";
export default class Ball extends Node {
  radius;
  x;
  y;
  speedX = 1;
  speedY = 1;
  constructor(ctx: CanvasRenderingContext2D, radius: number) {
    super(ctx);
    this.radius = radius;
    this.x = this.radius;
    this.y = this.radius;
  }

  update(time: number) {
    throw new Error("实现 Ball 的 update 方法");
  }

  draw(time: number) {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    this.ctx.fillStyle = "#0095DD";
    this.ctx.fill();
    this.ctx.closePath();
  }
}
