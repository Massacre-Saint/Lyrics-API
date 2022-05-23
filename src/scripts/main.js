import hmtltructure from './components/hmtlStructure';
import formOnDom from './components/form';
import events from './events';
import 'bootstrap';
import '../styles/main.scss';

const startApp = () => {
  // lyricsOnDom('prince', 'purple rain');
  hmtltructure();
  formOnDom();
  events();
};
startApp();
