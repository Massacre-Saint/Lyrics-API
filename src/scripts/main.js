// USE WITH FIREBASE AUTH
// import checkLoginStatus from './helpers/auth';
import axios from 'axios';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';

const renderToDOM = (divId, content) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = content;
};

const htmlStructure = () => {
  const domstring = '<div id="btn"></div>';
  renderToDOM('#app', domstring);
};

// API CALL
const getLyrics = (artist, song) => new Promise((resolve, reject) => {
  axios.get(`https://api.lyrics.ovh/v1/${artist}/${song}`)
    .then((repsonse) => resolve(repsonse.data))
    .catch((error) => reject(error));
});

const lyricsOnDom = (artist, song) => {
  getLyrics(artist, song).then((response) => {
    document.querySelector('#app').innerHTML = response.lyrics;
  });
};

const logLyricsBtn = () => {
  const domstring = '<button id="log-btn">Log Me!</button>';
  renderToDOM('#btn', domstring);
};

const events = () => {
  const btn = document.querySelector('#log-btn');
  btn.addEventListener('click', () => {
    lyricsOnDom('prince', 'purple rain');
  });
};

const startApp = () => {
  // lyricsOnDom('prince', 'purple rain');
  htmlStructure();
  logLyricsBtn();
  events();
};
startApp();
