import {app, Component} from 'apprun';

export default class Home extends Component {
  state = '';
  view = state => <div>Hej från home, <a href='#about'>About</a>, <a href='#todo'>Todo</a></div>;
  update = {
    '#home': state => state,
  };
}
