const Home = _ => {
  const home = $('<section class="home center-align"></section>');
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
  
  const title= $('<h2>Bienvenido al Gato Loco</h2>');
  const start_btn = $('<a class="waves-effect waves-light btn">iniciar juego</a>');

  home.append(links);
  home.append(title);
  home.append(start_btn);

  start_btn.on('click', _ => {
    state.current_screen = "register-players";
    render($('.root'));
  });
  return home;
}
