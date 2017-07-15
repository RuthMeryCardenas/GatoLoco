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
  const add_comment= $('<a href="#newComment">Comentar</a>');

  gameItem.append(result);
  gameItem.append(add_comment);

  return gameItem;
}
