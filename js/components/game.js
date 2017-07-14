const Game = _ => {
  const game= $('<section class="game center-align"></section>');
  const title= $('<h5>Turno de </h5>');
  const current_player= $('<span id="current-player">' + state.players[0].name +'</span>');
  const player1_movements= $('<p>Movimientos <span id="player1-name">' + state.players[0].name + '</span> <span id="player1-movements">0</span></p>');
  const player2_movements= $('<p>Movimientos <span id="player2-name">' + state.players[1].name + '</span> <span id="player2-movements">0</span></p>');
  const message= $('<p class="message">Gano <span></span></p>');
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
    box_btn = $('<a class="waves-effect waves-light btn teal lighten-2" data-position="' + i +'"></a>');
    box_btn.on('click', (e) => {
      if (state.current_player == 1) {
        play(state.players[0], e.target);
      }else {
        play(state.players[1], e.target);
      }
    });
    board.append(box_btn);
  }
  return board;
}

const play= (player, box) => {
  let current_box = $(box);
  current_box.text(player.symbol);
  let row = Math.floor(current_box.data('position') / 3);
  let column = current_box.data('position') % 3;
  state.board[row][column] = player.symbol;

  player.movements += 1;

  if (player.order == 1) {
    $('#player1-movements').text(player.movements);
  }else {
    $('#player2-movements').text(player.movements);
  }

  switch (checkWinner()) {
    case 0:
      state.winner_player= "empate";
      $('h5').empty();
      $('h5').text('El juego ha terminado');
      $('.message span').text('Es un empate');
      break;
    case 1:
      state.winner_player= player.order;
      $('h5').empty();
      $('h5').text('El juego ha terminado');
      $('.message span').text(player.name);
      break;
    case 2:
      state.winner_player= player.order;
      $('h5').empty();
      $('h5').text('El juego ha terminado');
      $('.message span').text(player.name);
      break;
    case 3:
      console.log('seguir jugando');
      if (player.order == 1) {
        state.current_player= 2;
        $('#current-player').text(state.players[1].name);
      }else {
        state.current_player= 1;
        $('#current-player').text(state.players[0].name);
      }
      break;
    default:
      console.log("El juego a empezado");
  }
}

const checkWinner= _ => {
    return check(state.players[0].symbol) ? 1:
           check(state.players[1].symbol) ? 2:
           checkFull() ? 0 : 3;
  }
const check = (player) => {
     return (state.board[0][0] == state.board[0][1] && state.board[0][0] == state.board[0][2] && (state.board[0][0] == player)) || //first row
       		  (state.board[1][0] == state.board[1][1] && state.board[1][0] == state.board[1][2] && (state.board[1][0] == player)) || //second row
       		  (state.board[2][0] == state.board[2][1] && state.board[2][0] == state.board[1][2] && (state.board[2][0] == player)) || //third row
       		  (state.board[0][0] == state.board[1][0] && state.board[0][0] == state.board[2][0] && (state.board[0][0] == player)) || //first column
       		  (state.board[0][1] == state.board[1][1] && state.board[0][1] == state.board[2][1] && (state.board[0][1] == player)) || //second column
       		  (state.board[0][2] == state.board[1][2] && state.board[0][2] == state.board[2][2] && (state.board[0][2] == player)) || //third column
       		  (state.board[0][0] == state.board[1][1] && state.board[0][0] == state.board[2][2] && (state.board[0][0] == player)) || //diagonal 1
       		  (state.board[0][2] == state.board[1][1] && state.board[0][2] == state.board[2][0] && (state.board[0][2] == player));   //diagonal 2
   }
const checkFull = _ => {
       return  ((state.board[0][0] == "x") || (state.board[0][0] == "o")) &&
     			    ((state.board[1][0] == "x") || (state.board[1][0] == "o")) &&
     			    ((state.board[2][0] == "x") || (state.board[2][0] == "o")) &&
     			    ((state.board[0][1] == "x") || (state.board[0][1] == "o")) &&
     			    ((state.board[1][1] == "x") || (state.board[1][1] == "o")) &&
     			    ((state.board[2][1] == "x") || (state.board[2][1] == "o")) &&
     			    ((state.board[0][2] == "x") || (state.board[0][2] == "o")) &&
     			    ((state.board[1][2] == "x") || (state.board[1][2] == "o")) &&
     			    ((state.board[2][2] == "x") || (state.board[2][2] == "o"));
   }
