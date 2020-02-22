import {app, Component} from 'apprun';

export default class About extends Component {
  state = '';
  view = state => <div>Hej från about, <a href='#home'>Home</a>, <a href='#todo'>Todo</a> </div>;
  update = {
    '#about': state => state,
  };
}
