import renderToDOM from '../helpers/renderToDom';

const hmtltructure = () => {
  const domString = `<div id="form-container"></div>
  <div id="lyrics-cont"></div>`;
  renderToDOM('#app', domString);
};

export default hmtltructure;
