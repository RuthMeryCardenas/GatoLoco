const RegisterPlayers = _ => {
  const register_players = $('<section class="register-players center-align"></section>');
  const label_1 = $('<h5>Ingrese el nombre del jugador 1</h5>');
  const player_1= $('<input id="player1"type="text">');
  const label_2 = $('<h5>Ingrese el nombre del jugador 2</h5>');
  const player_2= $('<input id="player2"type="text">');
  const start_btn = $('<a class="waves-effect waves-light btn">comenzar</a>');

  label_1.append(player_1);
  register_players.append(label_1);
  label_2.append(player_2);
  register_players.append(label_2);
  register_players.append(start_btn);

  start_btn.on('click', _ => {
    state.players.player1 = $('#player1').val();
    state.players.player2 = $('#player2').val();
    state.current_screen = "game";
    render($('.root'));
  });

  return register_players;
}
