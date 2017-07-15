'use strict';

const getJSON = (partial_url, cb) => {
  const url = 'https://test-ta.herokuapp.com/' + partial_url;
  const xhr = new XMLHttpRequest();

  xhr.addEventListener('load', () => {
    if (xhr.status !== 200) {
      return cb(new Error('Error loading JSON from ' + url + '(' + xhr.status + ')'));
    }
    cb(null, xhr.response);
  });
  xhr.open('GET', url);
  xhr.responseType = 'json';
  xhr.send();
};

const postJSON = (partial_url, body, cb) => {
  const url = 'https://test-ta.herokuapp.com/' + partial_url;
  const xhr = new XMLHttpRequest();

  xhr.open('POST', url);
  xhr.setRequestHeader('Content-Type', 'application/json');

  xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
      cb(this.responseText);
    }
  };

  xhr.send(JSON.stringify(body));
};
