const Game = require("boardgame.io/core").Game;

const CreativeCollabGame = Game({
  name: "creative-collab",

  setup: () => ({
    storySoFar: []
  }),

  moves: {
    clickDone(G, ctx, story) {
      const storySoFar = [...G.storySoFar];
      storySoFar.push(story);
      return { ...G, storySoFar };
    }
  },

  flow: {
    movesPerTurn: 1
  }
});

module.exports = { CreativeCollabGame };
