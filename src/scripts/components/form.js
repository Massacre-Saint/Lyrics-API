import renderToDOM from '../helpers/renderToDom';

const formOnDom = () => {
  const domString = `<form>
  <div class="mb-3">
    <label for="artist" class="form-label">Artist</label>
    <input type="text" class="form-control" id="artist" aria-describedby="emailHelp" required>
  </div>
  <div class="mb-3">
    <label for="song" class="form-label">Song</label>
    <input type="text" class="form-control" id="song" required>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>`;
  renderToDOM('#form-container', domString);
};

export default formOnDom;
