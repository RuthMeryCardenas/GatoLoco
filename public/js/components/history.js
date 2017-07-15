'use strict';
const Record = _ => {
  const record = $('<section class="history"></section>');
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

  const title = $('<h5 class="center-align">Historial</h5>');

  record.append(links);
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
    getJSON('games/'+ state.game_selected.id, (err, json) => {
      if (err) { return console.log(err.message);}
      state.game_selected.data = json;
      getJSON('games/'+ state.game_selected.id + '/comments', (err, json) => {
        if (err) { return console.log(err.message);}
        state.game_selected.comments = json;
        state.current_screen = "game-detail";
        render($('.root'));
      });
    });
  });

  gameItem.append(result);
  gameItem.append(show_comments);

  return gameItem;
}
