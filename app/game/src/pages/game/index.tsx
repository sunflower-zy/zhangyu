interface Game {
  name: string;
  component: unknown;
}

const games = import.meta.glob("./", {});
const gameList = Object.entries(games).reduce<Array<Game>>(
  (prev, [name, component]) => {
    if (name !== "index") {
      prev.push({
        name,
        component,
      });
    }
    return prev;
  },
  []
);
export default gameList;
