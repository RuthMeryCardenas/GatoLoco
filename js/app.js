'use strict';
const state = {
  current_screen: null,
  players : {
    player1 : null,
    player2 : null
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
    wrapper.append('game');
      break;
    default:
    wrapper.append(Home());
  }
  root.append(wrapper);
}

$( _ => {
  render($('.root'));
});
