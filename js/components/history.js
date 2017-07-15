'use strict';
const Record = _ => {
  const record = $('<section class="history"></section>');
  const title = $('<h5 class="center-align">Historial</h5>');

  record.append(title);
  record.append(Games(state.history));
  return record;
}

const Games = (gamesList) =>{
  const games = $('<div class="games"></div>');
  $.each(gamesList, (index, game) => {
    games.append(GameItem(game));
  });
  return games;
}

const GameItem = (data) => {
  let text = data.winner_player + " le gano a " + data.loser_player + " en " + data.number_of_turns_to_win + " movimientos";
  const gameItem= $('<div class="game right-align center-block"></div>');
  const result= $('<p class="center-align">' + text +'</p>');
  const show_comments= $('<a href="#" data-id="' + data.id + '">Comentar</a>');

  show_comments.on('click', (e) => {
    e.preventDefault();
    state.game_selected.id = $(e.target).data('id');
    getJSON('games/'+ state.game_selected.id + '/comments', (err, json) => {
      if (err) { return console.log(err.message);}
      state.game_selected.comments = json;
      state.current_screen = "game-detail";
      render($('.root'));
    });
  });

  gameItem.append(result);
  gameItem.append(show_comments);

  return gameItem;
}
