const Home = _ => {
  const home = $('<section class="home center-align"></section>');
  const title= $('<h2>Bienvenido al Gato Loco</h2>');
  const start_btn = $('<a class="waves-effect waves-light btn">iniciar juego</a>');

  home.append(title);
  home.append(start_btn);

  start_btn.on('click', _ => {
    state.current_screen = "register-players";
    render($('.root'));
  });
  return home;
}
