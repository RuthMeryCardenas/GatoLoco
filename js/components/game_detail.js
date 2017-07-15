const GameDetail = () => {
  const game_detail = $('<section class="game-detail center-align"></section>');
  let text = state.game_selected.data.winner_player + " le gano a " + state.game_selected.data.loser_player + " en " + state.game_selected.data.number_of_turns_to_win + " movimientos";
  const title = $('<h5 class="center-align">' + text +'</h5>');

  game_detail.append(title);
  game_detail.append(Comments());
  return game_detail;
}
const Comments = (commentsList) => {
  const comments = $('<div class="comments"></div>');
  if (state.game_selected.comments.length > 0) {
    $.each(commentsList, (index, comments) => {
      comments.append(CommentItem(comments));
    });
  }else {
    comments.append('Aún no hay comentarios');
  }
  return comments;
}
const CommentItem = (data) => {
  const commentItem = $('<div class="comment center-block left-align">');
  const user= $('<p>' + data.name +'</p>');
  user.append(' dice:');
  const message= $('<p>' + data.content +'</p>');

  commentItem.append(user);
  commentItem.append(message);

  return commentItem;
}
// const Modal = _ => {
//   const modal = $('<div id="newComment" class="modal"></div>');
//
//   modal.modal({
//     dismissible: true,
//     opacity: .5,
//     inDuration: 300,
//     outDuration: 200,
//     startingTop: '4%',
//     endingTop: '10%',
//     ready: function(modal, trigger) {
//       console.log("modal abriendose");
//       modal.append(ModalContent());
//       // console.log(modal, trigger);
//     },
//     complete: function() {
//       console.log("modal cerrandose");
//       modal.empty()
//     }
//   });
//
//   return modal;
// }

// const ModalContent = () => {
//   const content = $('<div class="modal-content"></div>');
//
//   const header  = $('<div class="header right-align"></div>');
//   const close_btn = $('<a class="waves-effect waves-teal btn-flat"><i class="material-icons">clear</i></a>');
//   const title = $('<h4 class="center-align">Agregar Comentario</h4>');
//   header.append(close_btn);
//   header.append(title);
//
//   const form = $('<div class="form"></div>');
//   form.append(User());
//   form.append(Message());
//   const buttons = $('<div class="right-align"></div>');
//   const add_btn = $('<a class="waves-effect waves-teal btn">listo</a>');
//   const cancel_btn = $('<a class="waves-effect waves-teal btn">cancelar</a>');
//
//   buttons.append(add_btn);
//   buttons.append(cancel_btn);
//   form.append(buttons);
//
//   content.append(header);
//   content.append(form);
//
//   add_btn.on('click', _ => {
//     let user = $('#user-name');
//     let message = $('#message');
//
//     if (user.val() == "" ||  message.val() == "") {
//       console.log("No se han completado los datos");
//     }else {
//       console.log('datos correctos');
//       let body = {
//         'author_name': user.val(),
//         'content': message.val()
//       }
//       postJSON('topics/' + state.current_topic.id +'/responses', body, _ => {
//         user.val('');
//         message.val('');
//         getJSON('topics/' + state.current_topic.id + '/responses', (err, json) => {
//           if (err) { return console.log(err.message);}
//           state.responses = json;
//           reRender($('.responses'), state.responses);
//         });
//       });
//     }
//   });
//
//   cancel_btn.on('click', _ => {
//     $('#user-name').val('');
//     $('#message').val('');
//   });
//
//   close_btn.on('click', _ => {
//     $('#newComment').modal('close');
//   });
//
//   return content;
// }
//
// const User = () => {
//   const user = $('<div class="input-field valign-wrapper">');
//
//   user.append('<i class="material-icons prefix">account_circle</i>');
//   const userName = $('<input id="user-name" type="text">');
//   user.append(userName);
//   user.append('<label for="user-name">Tu nombre:</label>');
//
//   return user;
// }
//
// const Message = () => {
//   const message = $('<div class="input-field valign-wrapper">');
//
//   message.append('<i class="material-icons prefix">message</i>');
//   const text = $('<textarea id="message" class="materialize-textarea"></textarea>');
//   message.append(text);
//   message.append('<label for="message">Tu comentario:</label>');
//
//   return message;
// }

// const reRender = (responses, listResponses) => {
//   responses.empty();
//
//   $.each(listResponses, (index, response) => {
//     responses.append(Response(response));
//   });
//
// }
