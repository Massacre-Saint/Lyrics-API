import axios from 'axios';

const getLyrics = (artist, song) => new Promise((resolve, reject) => {
  axios.get(`https://api.lyrics.ovh/v1/${artist}/${song}`)
    .then((repsonse) => resolve(repsonse.data))
    .catch((error) => reject(error));
});

export default getLyrics;
