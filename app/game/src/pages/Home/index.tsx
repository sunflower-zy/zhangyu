import { For } from "solid-js";
import type { Component } from "solid-js";
import { A } from "@solidjs/router";

interface Game {
  name: string;
  href: string;
}

const games: Array<Game> = [
  {
    name: "Breakout Game",
    href: "/breakout-game",
  },
];
const Home: Component = () => {
  return (
    <div class="App">
      <header class="header">
        {/* <img src={logo} class={styles.logo} alt="logo" /> */}

        <main>
          <For each={games}>
            {(game) => {
              return (
                <A
                  href={game.href}
                  class="link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>{game.name}</div>
                </A>
              );
            }}
          </For>
        </main>
      </header>
    </div>
  );
};

export default Home;
