'use strict';
const state = {
  current_screen: null
}

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  switch (state.current_screen) {
    case null:
    wrapper.append(Home());
      break;
    case "register-players":
    // wrapper.append(RegisterPlayers());
    wrapper.append('Registro de jugadores');
      break;
    default:
    wrapper.append(Home());
  }
  root.append(wrapper);
}

$( _ => {
  render($('.root'));
});
