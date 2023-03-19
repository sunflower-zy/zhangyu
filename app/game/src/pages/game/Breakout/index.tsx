import type { Component } from "solid-js";
import { createEffect, onMount } from "solid-js";
import "./index.css";
import Ball from "./object/Ball";
import Game from "./object/Game";
import Input from "./object/Input";
import Paddle from "./object/Paddle";

import Scene from "./object/Scene";
const Breakout: Component = () => {
  let ctx: CanvasRenderingContext2D;
  onMount(() => {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;

    ctx = canvas.getContext("2d")!;
    const game = new Game(ctx);

    const scene = new Scene(ctx);

    const ball = new Ball(ctx, 10);
    const paddle = new Paddle(ctx);

    ball.update = function (time) {
      if (
        this.x + this.speedX < this.radius ||
        this.x + this.speedX > this.ctx.canvas.width - this.radius
      ) {
        this.speedX = -this.speedX;
      }
      if (this.y + this.speedY < this.radius) {
        this.speedY = -this.speedY;
      } else if (this.y + this.speedY > this.ctx.canvas.height - this.radius) {
        if (this.x > paddle.left && this.x < paddle.left + paddle.width) {
          this.speedY = -this.speedY;
        }
      }
      this.y = this.y + this.speedY;
      this.x = this.x + this.speedX;
    };

    scene.checkGameover = function () {
      return (
        ball.y + ball.speedY > ball.ctx.canvas.height - ball.radius &&
        !(ball.x > paddle.left && ball.x < paddle.left + paddle.width)
      );
    };

    game.addScene(scene);

    scene.add(ball);
    scene.add(paddle);

    document.addEventListener("keydown", (event) => {
      Input.keyPressed[event.code] = true;
    });
    document.addEventListener("keyup", (event) => {
      Input.keyPressed[event.code] = false;
    });

    window.onresize = () => {
      game.resize();
    };

    requestAnimationFrame((time) => {
      game.render(time);
    });
  });

  return (
    <main class="game">
      <canvas id="canvas" />
    </main>
  );
};

export default Breakout;
