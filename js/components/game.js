const Game = _ => {
  const game= $('<section class="game center-align"></section>');
  const title= $('<h5>Turno de </h5>');
  const current_player= $('<span id="current-player">' + state.players.player1 +'</span>');
  const player1_movements= $('<p>Movimientos <span id="player1-name">' + state.players.player1 + '</span> <span id="player1-movements">0</span></p>');
  const player2_movements= $('<p>Movimientos <span id="player2-name">' + state.players.player2 + '</span> <span id="player2-movements">0</span></p>');
  const message= $('<p class="message">Gano <span>Jugador 1</span></p>');
  const send_history_btn= $('<a class="waves-effect waves-light btn">mandar al historial</a>');

  title.append(current_player);
  game.append(title);
  game.append(Board());
  game.append(player1_movements);
  game.append(player2_movements);
  game.append(message);
  game.append(send_history_btn);

  return game;
}

const Board = _ => {
  const board= $('<div class="board center-block"></div>');
  const total_boxes= 9;

  for (var i = 0; i < total_boxes; i++) {
    box_btn = $('<a class="waves-effect waves-light btn teal lighten-2"></a>');
    board.append(box_btn);
  }

  return board;
}
