'use strict';
const state = {
  current_screen: null,
  players: [{order:1, name: null, symbol: "x", movements:0},
            {order:2, name: null, symbol: "o", movements:0}],
  current_player: null,
  board : null,
  winner_player: null,
  history: null,
  game_selected: {
    id:null,
    data:null,
    comments: null
  }
}

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  switch (state.current_screen) {
    case null:
    wrapper.append(Home());
      break;
    case "register-players":
    wrapper.append(RegisterPlayers());
      break;
    case "game":
    wrapper.append(Game());
      break;
    case "history":
    wrapper.append(Record());
      break;
    case "game-detail":
    wrapper.append(GameDetail());
    // wrapper.append(Modal());
      break;
    default:
    wrapper.append(Home());
  }
  root.append(wrapper);
}

$( _ => {
  render($('.root'));
});
