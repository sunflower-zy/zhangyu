export default class Node {
  ctx: CanvasRenderingContext2D;

  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
  }

  update(time: number) {
    throw new Error("需要实现 update 函数");
  }
  draw(time: number) {
    throw new Error("需要实现 draw 函数");
  }
}
