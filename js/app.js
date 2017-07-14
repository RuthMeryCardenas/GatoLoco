'use strict';
const state = {
  current_screen: null,
  players: [{order:1, name: null, symbol: "x", movements:0},
            {order:2, name: null, symbol: "o", movements:0}],
  current_player: null,
  board : null,
  winner_player: null
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
    default:
    wrapper.append(Home());
  }
  root.append(wrapper);
}

$( _ => {
  render($('.root'));
});
