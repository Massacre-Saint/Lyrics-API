import getLyrics from '../api/getLyrics';
import renderToDOM from './helpers/renderToDom';

const lyricsOnDom = (artist, song) => {
  getLyrics(artist, song).then((response) => {
    renderToDOM('#lyrics-cont', response.lyrics);
    // document.querySelector('#app').innerHTML = response.lyrics;
  });
};
export default lyricsOnDom;
