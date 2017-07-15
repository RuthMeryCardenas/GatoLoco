'use strict';
const RegisterPlayers = _ => {
  const register_players = $('<section class="register-players center-align"></section>');
  const links = $('<div class="right-align"></div>');
  const go_home = $('<a href="#">Home</a>');
  const go_history = $('<a href="#">Historial</a>');
  go_home.on('click', (e) => {
    e.preventDefault();
    state.current_screen = null;
    render($('.root'));
  });
  go_history.on('click', (e) => {
    e.preventDefault();
    getJSON('games', (err, json) => {
      if (err) { return console.log(err.message);}
      state.history = json;
      state.current_screen = "history";
      render($('.root'));
    });
  });
  links.append(go_home);
  links.append(' | ');
  links.append(go_history);

  const label_1 = $('<h5>Ingrese el nombre del jugador 1</h5>');
  const player_1= $('<input id="player1"type="text">');
  const label_2 = $('<h5>Ingrese el nombre del jugador 2</h5>');
  const player_2= $('<input id="player2"type="text">');
  const start_btn = $('<a class="waves-effect waves-light btn">comenzar</a>');

  register_players.append(links);
  label_1.append(player_1);
  register_players.append(label_1);
  label_2.append(player_2);
  register_players.append(label_2);
  register_players.append(start_btn);

  start_btn.on('click', _ => {
    state.players[0].name = $('#player1').val();
    state.current_player = 1;
    state.players[1].name = $('#player2').val();
    state.current_screen = "game";
    state.board = [["+","+","+"],["+","+","+"],["+","+","+"]];
    render($('.root'));
  });

  return register_players;
}
