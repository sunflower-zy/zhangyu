import Node from "./Node";
export default class Scene {
  ctx: CanvasRenderingContext2D;
  nodes: Array<Node> = [];
  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
  }

  add(node: Node) {
    this.nodes.push(node);
  }

  checkGameover(): boolean {
    throw new Error("需要实现这个 checkGameOver 函数");
  }

  render(time: number) {
    if (!this.checkGameover()) {
      this.nodes.forEach((node) => {
        node.update(time);
        node.draw(time);
      });
    }
  }
}
